"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Copy, Loader2, Check, RotateCcw } from "lucide-react"
import { EmojiPicker } from "./emoji-picker"
import { AlphabetSelector } from "./alphabet-selector"
import { useToast } from "@/hooks/use-toast"
import { encodeMessage, decodeMessage } from "@/lib/crypto-utils"
import { z } from "zod"

const encodeSchema = z.object({
  inputText: z.string().min(1, "Please enter some text to encode"),
  carriers: z.array(z.string()).min(1, "Please select some carriers to hide your message"),
})

export function EncodeDecode() {
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([])
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [carrierType, setCarrierType] = useState<"emojis" | "letters">("emojis")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleReset = () => {
    setInputText("")
    setOutputText("")
    setSelectedEmojis([])
    setSelectedLetters([])
    setCopied(false)
    toast({
      title: "Reset Complete",
      description: "All data has been cleared.",
    })
  }

  const handleGenerate = async () => {
    if (mode === "encode") {
      const carriers = [...selectedEmojis, ...selectedLetters]
      const validation = encodeSchema.safeParse({
        inputText: inputText.trim(),
        carriers,
      })

      if (!validation.success) {
        const error = validation.error.errors[0]
        toast({
          title: "Validation Error",
          description: error.message,
          variant: "destructive",
        })
        return
      }
    } else {
      // Simple validation for decode mode
      if (!inputText.trim()) {
        toast({
          title: "Error",
          description: "Please enter some text to decode.",
          variant: "destructive",
        })
        return
      }
    }

    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (mode === "encode") {
        const carriers = [...selectedEmojis, ...selectedLetters]
        const encoded = encodeMessage(inputText, carriers)
        setOutputText(encoded)
      } else {
        const decoded = decodeMessage(inputText)
        setOutputText(decoded)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    if (!outputText) return

    try {
      await navigator.clipboard.writeText(outputText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast({
        title: "Copied!",
        description: "Text copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy text to clipboard.",
        variant: "destructive",
      })
    }
  }

  const handleModeChange = (checked: boolean) => {
    setMode(checked ? "decode" : "encode")
    setInputText("")
    setOutputText("")
  }

  return (
    <div className="space-y-6">
      {/* Mode Toggle with Reset Button - Made more compact */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center justify-center space-x-4 flex-1">
          <div className="flex items-center space-x-2">
            <Label htmlFor="mode-toggle" className={`text-sm ${mode === "encode" ? "font-semibold text-primary" : ""}`}>
              Encode
            </Label>
            <Switch id="mode-toggle" checked={mode === "decode"} onCheckedChange={handleModeChange} />
            <Label htmlFor="mode-toggle" className={`text-sm ${mode === "decode" ? "font-semibold text-primary" : ""}`}>
              Decode
            </Label>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={handleReset} className="flex items-center gap-2 bg-transparent">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>{mode === "encode" ? "Message to Hide" : "Encoded Message"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder={mode === "encode" ? "Enter your secret message..." : "Paste the encoded message here..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[120px] resize-none"
          />
        </CardContent>
      </Card>

      {/* Carrier Selection (only for encode mode) */}
      {mode === "encode" && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Choose Carriers</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Select {carrierType === "emojis" ? "emojis" : "letters, numbers, and special characters"} to hide your
                  message
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Label
                  htmlFor="carrier-toggle"
                  className={`text-sm ${carrierType === "emojis" ? "font-semibold text-primary" : ""}`}
                >
                  Emojis
                </Label>
                <Switch
                  id="carrier-toggle"
                  checked={carrierType === "letters"}
                  onCheckedChange={(checked) => setCarrierType(checked ? "letters" : "emojis")}
                />
                <Label
                  htmlFor="carrier-toggle"
                  className={`text-sm ${carrierType === "letters" ? "font-semibold text-primary" : ""}`}
                >
                  Letters
                </Label>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {(selectedEmojis.length > 0 || selectedLetters.length > 0) && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Selected Carriers:</Label>
                <div className="flex flex-wrap gap-1 p-3 bg-muted rounded-lg min-h-[40px]">
                  {selectedEmojis.map((emoji, index) => (
                    <span key={`emoji-${index}`} className="text-lg">
                      {emoji}
                    </span>
                  ))}
                  {selectedLetters.map((letter, index) => (
                    <span key={`letter-${index}`} className="text-sm font-mono bg-background px-1 py-0.5 rounded">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {carrierType === "emojis" ? (
              <EmojiPicker selectedEmojis={selectedEmojis} onEmojiSelect={setSelectedEmojis} />
            ) : (
              <AlphabetSelector selectedLetters={selectedLetters} onLetterSelect={setSelectedLetters} />
            )}
          </CardContent>
        </Card>
      )}

      {/* Generate Button */}
      <div className="flex justify-center">
        <Button onClick={handleGenerate} disabled={isLoading} size="lg" className="px-8 py-3 text-lg font-semibold">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            `${mode === "encode" ? "Encode" : "Decode"} Message`
          )}
        </Button>
      </div>

      {/* Output Section */}
      {outputText && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{mode === "encode" ? "Encoded Message" : "Decoded Message"}</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-transparent"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-lg font-mono text-sm break-all">{outputText}</div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
