"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { courseDates } from "@/lib/data"

const CS_MONTHS = [
  "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
  "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",
]

const CS_DAYS = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstWeekday(year: number, month: number) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1 // Mon=0 … Sun=6
}

function isStartDate(year: number, month: number, day: number) {
  return courseDates.some(
    (d) => d.year === year && d.month === month && d.day === day
  )
}

interface CalendarProps {
  initialYear?: number
  initialMonth?: number
}

export function Calendar({ initialYear = 2026, initialMonth = 5 }: CalendarProps) {
  const [year, setYear] = useState(initialYear)
  const [month, setMonth] = useState(initialMonth)

  const today = new Date()

  function prev() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }

  function next() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const daysInMonth = getDaysInMonth(year, month)
  const firstWeekday = getFirstWeekday(year, month)
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null)

  const isToday = (day: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day

  return (
    <div className="bg-surface border border-border p-6 select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center text-muted hover:text-cream hover:bg-surface-2 transition-colors"
          aria-label="Předchozí měsíc"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="font-display font-bold text-cream text-xl uppercase tracking-wide">
          {CS_MONTHS[month]} {year}
        </span>
        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center text-muted hover:text-cream hover:bg-surface-2 transition-colors"
          aria-label="Další měsíc"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {CS_DAYS.map((d) => (
          <div key={d} className="text-center font-display font-bold text-muted text-xs tracking-widest py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-px bg-border">
        {cells.map((day, i) => {
          if (!day) return <div key={i} className="bg-graphite h-11" />

          const start = isStartDate(year, month, day)
          const todayCell = isToday(day)

          return (
            <div
              key={i}
              className={`bg-graphite h-11 flex items-center justify-center text-sm font-medium transition-colors relative
                ${start ? "bg-red text-white font-display font-bold" : ""}
                ${todayCell && !start ? "ring-1 ring-inset ring-red text-cream" : ""}
                ${!start && !todayCell ? "text-muted" : ""}
              `}
            >
              {day}
              {start && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full" />
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-3">
        <div className="w-5 h-5 bg-red shrink-0" />
        <span className="text-muted text-xs">Termín zahájení kurzu</span>
      </div>
    </div>
  )
}
