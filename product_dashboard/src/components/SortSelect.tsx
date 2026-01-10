export default function SortSelect({
      value,
      onChange,
}: {
      value: string;
      onChange: (value: string) => void;
}) {
      return (
            <select
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  className="p-2 border border-gray-300 rounded bg-white text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
            >
                  <option value="none" className="text-black">
                        Sort
                  </option>
                  <option value="low" className="text-black">
                        Price: Low to High
                  </option>
                  <option value="high" className="text-black">
                        Price: High to Low
                  </option>
            </select>
      );
}
