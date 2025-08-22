// Zero-width characters for steganography
const ZERO_WIDTH_SPACE = "\u200B"
const ZERO_WIDTH_NON_JOINER = "\u200C"
const ZERO_WIDTH_JOINER = "\u200D"

// Convert text to binary representation using zero-width characters
function textToBinary(text: string): string {
  return text
    .split("")
    .map((char) => {
      const binary = char.charCodeAt(0).toString(2).padStart(16, "0")
      return binary
        .split("")
        .map((bit) => (bit === "1" ? ZERO_WIDTH_JOINER : ZERO_WIDTH_NON_JOINER))
        .join("")
    })
    .join(ZERO_WIDTH_SPACE)
}

// Convert binary representation back to text
function binaryToText(binary: string): string {
  try {
    const chunks = binary.split(ZERO_WIDTH_SPACE)
    return chunks
      .map((chunk) => {
        if (!chunk) return ""
        const binaryString = chunk
          .split("")
          .map((char) => {
            if (char === ZERO_WIDTH_JOINER) return "1"
            if (char === ZERO_WIDTH_NON_JOINER) return "0"
            return ""
          })
          .join("")

        if (binaryString.length % 16 !== 0) return ""

        let result = ""
        for (let i = 0; i < binaryString.length; i += 16) {
          const charCode = Number.parseInt(binaryString.substr(i, 16), 2)
          if (charCode > 0) {
            result += String.fromCharCode(charCode)
          }
        }
        return result
      })
      .join("")
  } catch (error) {
    throw new Error("Invalid encoded message format")
  }
}

// Encode message into carriers (emojis or letters)
export function encodeMessage(message: string, carriers: string[]): string {
  if (!message || carriers.length === 0) {
    throw new Error("Message and carriers are required")
  }

  const binaryData = textToBinary(message)
  const carrierCount = carriers.length
  let result = ""

  // Distribute the binary data across carriers
  const chunkSize = Math.ceil(binaryData.length / carrierCount)

  for (let i = 0; i < carrierCount; i++) {
    const start = i * chunkSize
    const end = Math.min(start + chunkSize, binaryData.length)
    const chunk = binaryData.slice(start, end)

    result += carriers[i] + chunk
  }

  return result
}

// Decode message from encoded text
export function decodeMessage(encodedText: string): string {
  if (!encodedText) {
    throw new Error("Encoded text is required")
  }

  try {
    // Extract all zero-width characters from the text
    let binaryData = ""

    for (const char of encodedText) {
      if (char === ZERO_WIDTH_SPACE || char === ZERO_WIDTH_NON_JOINER || char === ZERO_WIDTH_JOINER) {
        binaryData += char
      }
    }

    if (!binaryData) {
      throw new Error("No hidden message found")
    }

    return binaryToText(binaryData)
  } catch (error) {
    throw new Error("Failed to decode message. Please check the encoded text.")
  }
}
