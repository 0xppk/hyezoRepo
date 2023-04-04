"use client";

import {
  Form,
  Input,
  Modal,
  SubmitButton,
  Text,
  TextArea,
  zodSubmitHandler,
} from "@hyezo/ui";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icons } from "~/components/server";
import { fetchPost } from "~/lib/utils";
import arrow from "~/public/svgs/arrow.svg";

export default function MainPageGrid() {
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalChanger, setModalChanger] = useState<"search" | "post" | undefined>();
  return (
    <>
      <div className="relative col-span-2 h-[60vh]">
        <MainPageGrid.ImageSlider page={page} />
      </div>
      <div className="grid h-[60vh] items-end">
        <p className="p-16">
          we are still working on the renderings with keyboards, so please give us some
          more time. And we may not have time to reply you all, but your comments and
          suggestions will make this keycap set better. Thank you very much!
        </p>
      </div>
      <div className="col-span-2 h-[30vh]">
        <div className="grid h-full grid-cols-3 place-items-center">
          <div className="stack col-span-2">
            <MainPageGrid.TitleSlider page={page} />
          </div>
          <div className="grid h-full w-full grid-rows-2 place-items-center border border-gray-900">
            <div className="grid h-full w-full place-items-center border-b border-gray-900">
              <Icons.search
                className="cursor-pointer sm:h-10 sm:w-10"
                onClick={() => {
                  setIsOpen(true);
                  setModalChanger("search");
                }}
              />
            </div>
            <MainPageGrid.Modal isOpen={isOpen} setIsOpen={setIsOpen} as={modalChanger} />
            <div>
              <Icons.note
                className="cursor-pointer sm:h-10 sm:w-10"
                onClick={() => {
                  setIsOpen(true);
                  setModalChanger("post");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30vh] bg-orange-800">
        <div className="grid h-full grid-cols-2 place-items-center">
          <div
            onClick={() =>
              setPage(prev => {
                if (prev === 0) return 3;
                return prev - 1;
              })
            }
          >
            <Image
              src={arrow}
              alt="arrowing"
              width={50}
              height={50}
              className="-rotate-90 cursor-pointer duration-500 hover:scale-125"
              priority
            />
          </div>
          <div
            onClick={() =>
              setPage(prev => {
                if (prev === 3) return 0;
                return prev + 1;
              })
            }
          >
            <Image
              src={arrow}
              alt="arrowing"
              width={50}
              height={50}
              className="rotate-90 cursor-pointer duration-500 hover:scale-125"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  as?: "search" | "post";
};

MainPageGrid.Modal = ({ isOpen, setIsOpen, as }: ModalProps) => {
  const [category, setCategory] = useState("");

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
        <Modal.Content className="grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
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
      )}
      {category && as === "post" && (
        <Modal.Content className="min-w-[20rem] p-5 pt-8 text-sm">
          <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
            등록
          </Text>
          <Form onSubmit={onSubmit}>
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>모델명</span>
            </div>
            <Input name="title" color="darkNavy" />
            <div className="flex items-center text-white">
              <div className="blue-dot" />
              <span>가격</span>
            </div>
            <Input name="price" type="number" placeholder="만원 단위" color="darkNavy" />
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
      )}
      {!category && isOpen && as === "search" && (
        <Modal.Content className="grid h-40 min-w-[15rem] grid-cols-2 place-items-center text-sm">
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
      )}
      {category && as === "search" && (
        <Modal.Content className="min-w-[20rem] text-sm">
          <Form onSubmit={onSubmit} className="p-5">
            <span className="blue-dot"></span>
            <Input name="title" label="상품명" className="bg-gray-900" />
            <Input name="price" type="number" label="가격" />
            <div className="flex gap-2">
              <Input name="layout" label="레이아웃" />
              <Input name="color" label="색상" />
            </div>
            <TextArea name="message" label="한줄메시지" />
            <SubmitButton>dd</SubmitButton>
          </Form>
        </Modal.Content>
      )}
    </Modal>
  );
};

const images = [
  "/images/sample0.webp",
  "/images/sample2.webp",
  "/images/sample5.webp",
  "/images/sample4.webp",
];

MainPageGrid.ImageSlider = ({ page }: { page: number }) => {
  return (
    <>
      {images.map((e, i) => (
        <Image
          src={e}
          alt="image"
          key={e}
          priority
          fill
          className={`object-cover duration-1000 ${
            page === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
};

const titles = ["intro", "selling", "buying", "chatting"];
MainPageGrid.TitleSlider = ({ page }: { page: number }) => {
  return (
    <>
      {titles.map((title, i) => (
        <Text
          key={title}
          variant="3xl/semibold"
          className={`font-point text-center uppercase duration-500 ${
            page === i ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {title}
        </Text>
      ))}
    </>
  );
};
