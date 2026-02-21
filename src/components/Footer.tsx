import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <T>
          <div className="text-center text-sm text-gray-400 space-y-3">
            <p className="text-[#ECFDF5] bg-[#065F46]/20 border border-[#065F46]/30 rounded px-4 py-2 inline-block">
              This is an example application built with General Translation to demonstrate internationalization. It is not a real service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500">
              <a href="https://www.parkrun.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">parkrun</a>
              <a href="https://www.strava.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Strava</a>
              <a href="https://worldathletics.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">World Athletics</a>
              <a href="https://www.runnersworld.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Runner&#39;s World</a>
            </div>
            <p className="text-gray-500">
              Built with <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="text-[#065F46] hover:text-[#ECFDF5] transition-colors">General Translation</a>
            </p>
          </div>
        </T>
      </div>
    </footer>
  );
}
