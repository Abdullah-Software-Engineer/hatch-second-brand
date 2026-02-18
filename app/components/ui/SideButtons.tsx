'use client'

export default function SideButtons() {
  const handleLiveChat = () => console.log('Opening live chat...')
  const handleLanguageSwitch = () => console.log('Switching language...')

  return (
    <aside
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[99] flex items-center pointer-events-none"
      aria-label="Quick actions"
    >
      <div className="flex flex-col gap-2 sm:gap-3 pointer-events-auto">
        <button
          onClick={handleLiveChat}
          className="bg-secondary text-white px-1 py-4 sm:px-1.5 sm:py-6 md:px-2 md:py-8 border border-l-0 border-white rounded-r-md hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-lg min-w-[28px] sm:min-w-[32px]"
          aria-label="Start live chat"
        >
          <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap [writing-mode:vertical-rl] rotate-180 block">
            Live Chat
          </span>
        </button>
        <button
          onClick={handleLanguageSwitch}
          className="bg-secondary text-white px-1 py-4 sm:px-1.5 sm:py-6 md:px-2 md:py-8 border border-l-0 border-white rounded-r-md hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-lg min-w-[28px] sm:min-w-[32px]"
          aria-label="Switch language"
        >
          <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap [writing-mode:vertical-rl] rotate-180 block">
            Español
          </span>
        </button>
      </div>
    </aside>
  )
}
