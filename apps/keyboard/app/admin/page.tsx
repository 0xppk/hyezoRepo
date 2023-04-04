"use client";

import { Form, Input, SelectBox, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { usePermitEntering } from "~/hooks";
import { fetchPost } from "~/lib/utils";

type BrandType = {
  type: "HOUSING" | "KEYCAP" | "VENDOR";
};
const brandType: BrandType[] = [
  { type: "HOUSING" },
  { type: "KEYCAP" },
  { type: "VENDOR" },
];
type BrandStatusType = {
  type: "ING" | "END" | "PENDING";
};
const brandStatus: BrandStatusType[] = [
  { type: "ING" },
  { type: "END" },
  { type: "PENDING" },
];
type NationType = {
  nation: string;
};
const nationList = [
  { nation: "🇰🇷" },
  { nation: "🇨🇳" },
  { nation: "🇩🇪" },
  { nation: "🇺🇸" },
  { nation: "🇦🇺" },
  { nation: "🇯🇵" },
  { nation: "🇸🇬" },
];

export default function AdminPage() {
  const [isEnter] = usePermitEntering();

  const onSubmit: zodSubmitHandler = async data => {
    await fetchPost("/api/createBrand", {
      body: JSON.stringify(data),
    });
  };

  return (
    <div
      className={`grid h-screen w-screen place-items-center duration-1000 ${
        isEnter ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <div className="modal rounded-xl">
        <div className="drop-shadow-blue min-w-[400px] rounded-xl bg-gray-900 px-8 py-6">
          <Form onSubmit={onSubmit} className="h-96">
            <p>brand</p>
            <Input name="title" />
            <p>type</p>
            <SelectBox<BrandType, "type">
              name="select"
              list={brandType}
              labelKey="type"
              searchBar
            ></SelectBox>
            <p>nation</p>
            <SelectBox<NationType, "nation">
              name="select2"
              list={nationList}
              labelKey="nation"
              searchBar
            ></SelectBox>
            <p>status</p>
            <SelectBox<BrandStatusType, "type">
              name="select3"
              list={brandStatus}
              labelKey="type"
              searchBar
            ></SelectBox>
            <SubmitButton>저장</SubmitButton>
          </Form>
        </div>
      </div>
    </div>
  );
}
