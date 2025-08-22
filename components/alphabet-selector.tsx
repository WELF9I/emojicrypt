"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
const numbers = "0123456789".split("")
const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?".split("")

interface AlphabetSelectorProps {
  selectedLetters: string[]
  onLetterSelect: (letters: string[]) => void
}

export function AlphabetSelector({ selectedLetters, onLetterSelect }: AlphabetSelectorProps) {
  const [useUppercase, setUseUppercase] = useState(true)

  const toggleLetter = (letter: string) => {
    if (selectedLetters.includes(letter)) {
      onLetterSelect(selectedLetters.filter((l) => l !== letter))
    } else {
      onLetterSelect([...selectedLetters, letter])
    }
  }

  const removeLetter = (letter: string) => {
    onLetterSelect(selectedLetters.filter((l) => l !== letter))
  }

  const currentLetters = useUppercase ? uppercaseLetters : lowercaseLetters

  return (
    <div className="space-y-4">
      {/* Selected Letters */}
      {selectedLetters.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Selected Characters ({selectedLetters.length})</h4>
          <div className="flex flex-wrap gap-1">
            {selectedLetters.map((letter, index) => (
              <div key={index} className="inline-flex items-center">
                <Badge variant="secondary" className="text-lg px-2 py-1">
                  {letter}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeLetter(letter)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Character Selection */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium">Letters</h4>
            <div className="flex items-center space-x-2">
              <Label htmlFor="case-toggle" className={useUppercase ? "font-semibold text-primary" : "text-sm"}>
                ABC
              </Label>
              <Switch
                id="case-toggle"
                checked={!useUppercase}
                onCheckedChange={(checked) => setUseUppercase(!checked)}
              />
              <Label htmlFor="case-toggle" className={!useUppercase ? "font-semibold text-primary" : "text-sm"}>
                abc
              </Label>
            </div>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1">
            {currentLetters.map((letter) => (
              <Button
                key={letter}
                variant={selectedLetters.includes(letter) ? "default" : "outline"}
                size="sm"
                className="h-10 w-10 font-bold"
                onClick={() => toggleLetter(letter)}
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Numbers</h4>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1">
            {numbers.map((number) => (
              <Button
                key={number}
                variant={selectedLetters.includes(number) ? "default" : "outline"}
                size="sm"
                className="h-10 w-10 font-bold"
                onClick={() => toggleLetter(number)}
              >
                {number}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Special Characters</h4>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1">
            {specialChars.map((char) => (
              <Button
                key={char}
                variant={selectedLetters.includes(char) ? "default" : "outline"}
                size="sm"
                className="h-10 w-10 font-bold"
                onClick={() => toggleLetter(char)}
              >
                {char}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
