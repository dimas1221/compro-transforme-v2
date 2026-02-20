export function SuccessStoryCard({
  title,
  description,
  image,
  highlighted = false,
}) {
  return (
    <div
      className={`
        rounded-xl p-6 flex flex-col items-center text-center transition
        ${
          highlighted
            ? "bg-white shadow-xl scale-105"
            : "bg-white/10 text-white hover:bg-white/20"
        }
      `}
    >
      <div className="w-full h-44 mb-6 rounded-lg overflow-hidden bg-black/10">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <h3
        className={`text-xl font-bold mb-3 ${
          highlighted ? "text-gray-900" : "text-white"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-6 ${
          highlighted ? "text-gray-600" : "text-white/80"
        }`}
      >
        {description}
      </p>

      <button
        className={`
          px-6 py-2 rounded-full text-sm font-semibold transition
          ${
            highlighted
              ? "bg-sky-500 text-white hover:bg-sky-600"
              : "bg-white text-sky-600 hover:bg-sky-100"
          }
        `}
      >
        MORE
      </button>
    </div>
  );
}
