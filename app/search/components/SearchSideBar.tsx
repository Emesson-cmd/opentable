export default function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-">Regions</h1>
        <p className="font-light text-reg">Toronto</p>
        <p className="font-light text-reg">Ottawa</p>
        <p className="font-light text-reg">Motreal</p>
        <p className="font-light text-reg">Hamilton</p>
        <p className="font-light text-reg">Lingston</p>
        <p className="font-light text-reg">Niiagara</p>
      </div>

      <div className="border-b pb-4 mt-3">
        <h1 className="mb-">Vuisine</h1>
        <p className="font-light text-reg">Mexican</p>
        <p className="font-light text-reg">Italian</p>
        <p className="font-light text-reg">Brazilian</p>
        <p className="font-light text-reg">Chinese</p>
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">$</button>
          <button className="border-r border-t border-b w-full font-light text-reg p-2">$$</button>
          <button className="border-r border-t border-b w-full font-light text-reg rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
