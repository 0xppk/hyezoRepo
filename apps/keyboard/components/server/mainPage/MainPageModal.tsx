import {
  ComboBox,
  Form,
  Input,
  Modal,
  SubmitButton,
  Text,
  TextArea,
  zodSubmitHandler,
} from "@hyezo/ui";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { fetchPost } from "~/lib/utils";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  brands: AllBrandData;
  as?: "search" | "post";
};

export default function MainPageModal({
  isOpen,
  setIsOpen,
  as,
  brands,
}: ModalProps) {
  const [category, setCategory] = useState<"BUY" | "SELL" | undefined>();
  const [itemType, setItemType] = useState<"HOUSING" | "KEYCAP" | undefined>();

  const filteredBrands = brands.filter(
    brand => brand.type === itemType || brand.type === "VENDOR",
  );

  useEffect(() => {
    return () => {
      setCategory(undefined);
      setItemType(undefined);
    };
  }, [isOpen]);

  const onSubmit: zodSubmitHandler = async data => {
    await fetchPost("/api/createPost", {
      body: JSON.stringify({ ...data, category, status: "ING" }),
    });
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="narrow"
      className="drop-shadow-blue flex min-w-max flex-col items-center rounded-xl bg-gray-900"
      title="Search Users"
    >
      {!category && isOpen && <MainPageModal.FirstPhase setCategory={setCategory} />}
      {category && !itemType && as === "post" && (
        <MainPageModal.SecondPhase setItemType={setItemType} />
      )}
      {category && itemType && as === "post" && (
        <MainPageModal.PostMode
          onSubmit={onSubmit}
          brands={filteredBrands}
          itemType={itemType}
        />
      )}
      {category && as === "search" && <MainPageModal.SearchMode />}
    </Modal>
  );
}

type ModalFirstPhaseProps = {
  setCategory: Dispatch<SetStateAction<"BUY" | "SELL" | undefined>>;
};

MainPageModal.FirstPhase = ({ setCategory }: ModalFirstPhaseProps) => {
  return (
    <Modal.Content className="relative grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
      <div
        className="grid h-full w-full cursor-pointer place-items-center border-r border-gray-800"
        onClick={() => setCategory("BUY")}
      >
        구매
      </div>
      <div className="cursor-pointer" onClick={() => setCategory("SELL")}>
        판매
      </div>
    </Modal.Content>
  );
};

type ModalSecondPhaseProps = {
  setItemType: Dispatch<SetStateAction<"HOUSING" | "KEYCAP" | undefined>>;
};

MainPageModal.SecondPhase = ({ setItemType }: ModalSecondPhaseProps) => {
  return (
    <Modal.Content className="relative grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
      <div
        className="grid h-full w-full cursor-pointer place-items-center border-r border-gray-800"
        onClick={() => setItemType("HOUSING")}
      >
        하우징
      </div>
      <div className="cursor-pointer" onClick={() => setItemType("KEYCAP")}>
        키캡
      </div>
    </Modal.Content>
  );
};

type ModalPostModeProps = {
  onSubmit: zodSubmitHandler;
  brands: AllBrandData;
  itemType: "HOUSING" | "KEYCAP" | "";
};

MainPageModal.PostMode = ({ onSubmit, brands, itemType }: ModalPostModeProps) => {
  return (
    <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
      <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
        등록
      </Text>
      <Form onSubmit={onSubmit}>
        <div className="-mb-2 flex items-center text-white">
          <div className="blue-dot" />
          <span>브랜드</span>
        </div>
        <ComboBox name="objDataCombo" list={brands} color="darkNavy" />
        <div className="mt-2 flex gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>모델명</span>
            </div>
            <Input name="title" color="darkNavy" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>가격</span>
            </div>
            <Input
              name="price"
              type="number"
              placeholder="만원 단위"
              color="darkNavy"
            />
          </div>
        </div>
        {itemType === "HOUSING" ? (
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-white">
                <div className="blue-dot" />
                <span>레이아웃</span>
              </div>
              <Input name="layout" color="darkNavy" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center text-white">
                <div className="blue-dot" />
                <span>색상</span>
              </div>
              <Input name="color" color="darkNavy" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>킷</span>
            </div>
            <Input name="layout" color="darkNavy" />
          </div>
        )}

        <div className="-mb-2 flex items-center text-white">
          <div className="blue-dot" />
          <span>특이사항</span>
        </div>
        <TextArea
          name="message"
          className="border-gray-700/70 bg-gray-900 text-white/80"
        />
        <SubmitButton>dd</SubmitButton>
      </Form>
    </Modal.Content>
  );
};

MainPageModal.SearchMode = () => {
  const onSubmit: zodSubmitHandler = ({ text }) => {
    console.log(text);
  };

  return (
    <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
      <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
        찾기
      </Text>
      <Form onSubmit={onSubmit}>
        <Input name="text" />
        <SubmitButton>검색</SubmitButton>
      </Form>
    </Modal.Content>
  );
};
