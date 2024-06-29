import useCarrer from "@/hooks/useCarrer";

export default function Career() {
  const carrer = useCarrer();
  const { carrerData } = carrer;

  return (
    <div className="flex w-full h-full items-center max-sm:flex-co justify-center">
      <div className="flex flex-col justify-between h-2/3 w-4/5 border-l-2 border-black p-12">
        {carrerData.map((item) => (
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-9">
              <div className="h-3 w-3 bg-black rounded-full" />
              <span>{item.company}</span>
            </div>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
