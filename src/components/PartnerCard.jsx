export function PartnerCard({ title, image }) {
  return (
    <div className="border rounded-lg h-24 flex flex-col items-center justify-center gap-2 p-3">
      <img src={image} alt={title} className="h-8 object-contain" />
      <span className="text-sm font-semibold text-gray-600">{title}</span>
    </div>
  );
}
