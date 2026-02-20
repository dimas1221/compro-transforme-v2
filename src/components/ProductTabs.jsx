export default function ProductTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            px-4 py-1.5 rounded-full text-sm font-medium transition
            ${
              activeTab === tab
                ? "bg-sky-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
