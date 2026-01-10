export default function CategoryFilter({
      categories,
      value,
      onChange,
}: {
      categories: string[];
      value: string;
      onChange: (value: string) => void;
}) {
      return (
            <select
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  className="p-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
                  <option value="all" className="text-black">
                        All
                  </option>
                  {categories.map(category => (
                        <option key={category} value={category} className="text-black">
                              {category}
                        </option>
                  ))}
            </select>
      );
}
