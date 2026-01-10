export default function SearchBar({
      value,
      onChange,
}: {
      value: string;
      onChange: (value: string) => void;
}) {
      return (
            <input
                  type="text"
                  placeholder="Search products"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
      );
}
