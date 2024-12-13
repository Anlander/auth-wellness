"use client";

interface KostSchemaProps {
  data: any;
}

export const KostSchema = ({ data }: KostSchemaProps) => {
  return (
    <div
      className="bg-white min-h-[600px] p-5 
    flex w-full"
    >
      {data.map((el: any) => {
        return <h2>{el.food}</h2>;
      })}
    </div>
  );
};
