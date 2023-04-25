import {
  ComboBox,
  Form,
  Input,
  Modal,
  SubmitButton,
  TextArea,
  zodSubmitHandler,
} from "@hyezo/ui";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useSWR from "swr";
import { fetchPost, fetcher } from "~/lib/utils";
import { type TBrand } from "~/types/prisma";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  as?: "search" | "post";
};

export default function MainPageModal({ isOpen, setIsOpen, as }: ModalProps) {
  const [category, setCategory] = useState<"BUY" | "SELL" | undefined>();
  const [itemType, setItemType] = useState<"HOUSING" | "KEYCAP" | undefined>();
  const { data: brands = [] } = useSWR("/api/getAllBrand", fetcher<TBrand[]>);
  const filteredBrands = brands?.filter(
    brand => brand.type === itemType || brand.type === "VENDOR",
  );

  useEffect(() => {
    return () => {
      setCategory(undefined);
      setItemType(undefined);
    };
  }, [isOpen]);

  const onSubmit: zodSubmitHandler = async data => {
    const res = await fetchPost<TResponse>("/api/createPost", {
      body: JSON.stringify({ ...data, category, status: "ING" }),
    });
    if (res.message) alert(res.message);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="narrow"
      className="drop-shadow-blue flex min-w-max flex-col items-stretch rounded-xl bg-gray-900 px-8 pb-6 pt-7"
    >
      {as === "post" ? (
        <Modal.Content className="grid gap-4">
          <div className="flex w-full justify-between gap-5 duration-700">
            <p className={`duration-300 ${itemType && "text-gray-700/70"}`}>
              1. 카테고리를 설정해주세요.
            </p>
            <div className="flex justify-evenly gap-5">
              <button
                className={`duration-300 hover:text-white ${
                  category === "BUY"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setCategory("BUY")}
              >
                구매
              </button>
              <button
                className={`duration-300 hover:text-white ${
                  category === "SELL"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setCategory("SELL")}
              >
                판매
              </button>
            </div>
          </div>

          <div
            className={`flex w-full justify-between gap-5 duration-700 ${
              category
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-0 select-none opacity-0"
            } ${itemType && "place-self-start"}`}
          >
            <p className={`duration-300 ${itemType && "text-gray-700/70"}`}>
              2. 무엇을 {category === "SELL" ? "판매" : "구매"}하실 건가요?
            </p>
            <div className="flex justify-evenly gap-5">
              <button
                className={`duration-300 hover:text-white ${
                  itemType === "HOUSING"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setItemType("HOUSING")}
              >
                하우징
              </button>
              <button
                className={`duration-300 hover:text-white ${
                  itemType === "KEYCAP"
                    ? "underline decoration-orange-500 decoration-wavy underline-offset-8"
                    : "text-gray-700/70"
                }`}
                onClick={() => setItemType("KEYCAP")}
              >
                키캡
              </button>
            </div>
          </div>

          <div
            className={`duration-700 ${
              itemType
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-75 select-none opacity-0"
            }`}
          >
            <p className="pb-3">3. 나머지 항목을 작성해주세요.</p>
            <Form onSubmit={onSubmit} className="gap-3">
              {/* 브랜드 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="blue-dot" />
                  <span>브랜드</span>
                </div>
                <ComboBox<TBrand>
                  name="objDataCombo"
                  labelKey="name"
                  list={filteredBrands}
                  color="darkNavy"
                  width="narrow"
                />
              </div>

              {/* 모델 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="blue-dot" />
                  <span>모델명</span>
                </div>

                <Input name="title" color="darkNavy" />
              </div>

              {/* 가격 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
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

              {/* 배열 or 킷 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="gray-dot" />
                  <span>{itemType === "HOUSING" ? "배열" : "킷"}</span>
                </div>
                <Input name="layout" color="darkNavy" />
              </div>

              {/* 색상 인풋 */}
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <div className="gray-dot" />
                  <span>색상</span>
                </div>
                <Input name="color" color="darkNavy" />
              </div>

              {/* 특이사항 인풋 */}
              <div className="-mb-4 flex items-center">
                <div className="flex items-center py-2">
                  <div className="gray-dot" />
                  <span>특이사항</span>
                </div>
              </div>
              <TextArea
                name="message"
                className="border-gray-700/70 bg-gray-900 text-white/80"
              />
              <SubmitButton>작성</SubmitButton>
            </Form>
          </div>
        </Modal.Content>
      ) : (
        // TODO 서치 아이콘 클릭시
        <></>
      )}
    </Modal>
  );
}
