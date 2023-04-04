import { useRef, useState } from "react";
import { Input, Text } from ".";
import Form from "./Form";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";

export default function Grid() {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="narrow"
      className="drop-shadow-blue flex min-w-max flex-col items-center rounded-xl bg-gray-900 p-7 py-10"
      title="Search Users"
      focusRef={ref}
    >
      <Modal.Content className="min-w-[20rem] text-sm">
        <Text variant="2xl/bold" className="font-point pb-5 text-center text-white">
          등록
        </Text>
        <Form onSubmit={() => {}}>
          <div className="flex items-center text-white">
            <div className="blue-dot" />
            <span>모델명</span>
          </div>
          <Input name="title" color="darkNavy" ref={ref} autoFocus />
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
    </Modal>
  );
}
