import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  zodSubmitHandler,
  Modal,
  Text,
  Form,
  ComboBox,
  Input,
  TextArea,
  SubmitButton,
} from "@hyezo/ui";
import { fetchPost } from "~/lib/utils";
import { AllBrandData } from "~/types/prisma";
import Icons from "../Icons";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  brands: AllBrandData;
  as?: "search" | "post";
};

export default function MainPageModal({ isOpen, setIsOpen, as, brands }: ModalProps) {
  const [category, setCategory] = useState<"BUY" | "SELL" | "">("");

  useEffect(() => {
    return () => setCategory("");
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
      {!category && isOpen && as === "post" && (
        <MainPageModal.FirstPhase setCategory={setCategory} />
      )}
      {category && as === "post" && (
        <MainPageModal.PostMode onSubmit={onSubmit} brands={brands} />
      )}
      {!category && isOpen && as === "search" && (
        <MainPageModal.FirstPhase setCategory={setCategory} />
      )}
      {category && as === "search" && (
        <MainPageModal.PostMode onSubmit={onSubmit} brands={brands} />
      )}
    </Modal>
  );
}

type ModalFirstPhaseProps = {
  setCategory: Dispatch<SetStateAction<"BUY" | "SELL" | "">>;
};

MainPageModal.FirstPhase = ({ setCategory }: ModalFirstPhaseProps) => {
  return (
    <Modal.Content className="relative grid h-96 min-w-[20rem] grid-cols-2 place-items-center text-sm">
      <div
        className="grid h-full w-full cursor-pointer place-items-center border-r border-gray-800"
        onClick={() => setCategory("BUY")}
      >
        구매
      </div>
      <div className="absolute grid h-10 w-10 place-items-center rounded-full bg-gray-700">
        <Icons.search className="h-auto w-auto" />
      </div>
      <div className="cursor-pointer" onClick={() => setCategory("SELL")}>
        판매
      </div>
    </Modal.Content>
  );
};

type ModalPostModeProps = {
  onSubmit: zodSubmitHandler;
  brands: AllBrandData;
};

MainPageModal.PostMode = ({ onSubmit, brands }: ModalPostModeProps) => {
  return (
    <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
      <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
        등록
      </Text>
      <Form onSubmit={onSubmit}>
        <div className="flex items-center text-white">
          <div className="blue-dot" />
          <span>브랜드</span>
        </div>
        <ComboBox name="select" list={brands} color="darkNavy" />
        <div className="flex gap-2">
          <div className="flex flex-col">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>모델명</span>
            </div>
            <Input name="title" color="darkNavy" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>가격</span>
            </div>
            <Input name="price" type="number" placeholder="만원 단위" color="darkNavy" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>레이아웃</span>
            </div>
            <Input name="layout" color="darkNavy" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>색상</span>
            </div>
            <Input name="color" color="darkNavy" />
          </div>
        </div>

        <div className="flex items-center text-white">
          <div className="blue-dot" />
          <span>한줄 메시지</span>
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
