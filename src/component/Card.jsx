export default function Card({ Icon, judul, deskripsi, ...motionProps }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl p-6 transition hover:shadow-2xl hover:-translate-y-1 duration-300 border border-gray-200"
      {...motionProps}
    >
      <div className="text-5xl text-primary mb-4 transition group-hover:scale-110">
        {Icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition">
          {judul}
        </h2>
        <p className="text-gray-500 text-sm/loose">{deskripsi}</p>
      </div>
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
    </div>
  );
}
