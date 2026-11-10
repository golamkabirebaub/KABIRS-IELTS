import { UPCOMING_BATCHES, BatchItem } from '../data/ieltsData';
import { Calendar, Users, MapPin, Video, ArrowRight } from 'lucide-react';

interface BatchScheduleProps {
  onReserveBatch: (batchName: string) => void;
}

export function BatchSchedule({ onReserveBatch }: BatchScheduleProps) {
  return (
    <section id="batches" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Campus & Online Live Admissions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Upcoming IELTS Batch Schedule
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Small batch sizes capped at 20 students per classroom (and 25 online) to preserve strict 1-on-1 speaking and writing feedback.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            Updated Daily · Admissions Open for March–April 2026
          </div>
        </div>

        {/* Schedule Table / Grid */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm overflow-hidden">
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {UPCOMING_BATCHES.map((batch: BatchItem) => (
              <div
                key={batch.id}
                className="p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors"
              >
                {/* Batch Name & Type */}
                <div className="space-y-1.5 min-w-0 md:w-1/3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        batch.type.includes('Campus')
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      {batch.type.includes('Campus') ? (
                        <MapPin className="w-3 h-3" />
                      ) : (
                        <Video className="w-3 h-3" />
                      )}
                      {batch.type}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {batch.course}
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    Batch Code: {batch.id.toUpperCase()}
                  </p>
                </div>

                {/* Timings & Days */}
                <div className="space-y-1 text-xs text-neutral-600 dark:text-neutral-300 md:w-1/3">
                  <div>
                    <span className="text-neutral-400 font-medium">Days: </span>
                    <strong className="text-neutral-900 dark:text-neutral-100">{batch.days}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 font-medium">Timing: </span>
                    <strong className="text-neutral-900 dark:text-neutral-100">{batch.time}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 font-medium">Orientation Date: </span>
                    <strong className="text-blue-600 dark:text-blue-400">{batch.startDate}</strong>
                  </div>
                </div>

                {/* Seat Capacity & Action */}
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-1/3 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100 dark:border-neutral-800">
                  <div className="text-left md:text-right">
                    <div className="flex items-center md:justify-end gap-1.5 text-xs font-mono">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                        {batch.seatsLeft} seats left
                      </span>
                      <span className="text-neutral-400">/ {batch.totalSeats}</span>
                    </div>
                    <div className="w-24 bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden mt-1.5 ml-auto">
                      <div
                        className="bg-rose-500 h-full rounded-full"
                        style={{
                          width: `${((batch.totalSeats - batch.seatsLeft) / batch.totalSeats) * 100}%`
                        }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => onReserveBatch(`${batch.course} (${batch.days} · ${batch.time})`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Reserve Seat
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
