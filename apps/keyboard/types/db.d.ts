/**
 * Redis Message Type
 */
type Message = {
  id: string;
  userId: string;
  message: string;
  created_at: number;
  username: string;
  profilePic: string;
};

/**
 * 상품등록
 */
type InputDataForRegisterItem = {
  id: string;
  title: string;
  price: number;
  layout?: string;
  color?: string;
  message?: string;
  category: "BUY" | "SELL";
  status: "ING" | "DONE" | "HOLD";
  objDataCombo: Record<string, any>;
};

/**
 * 키보드회사 DB 업데이트
 */
type InputDataForRegisterManufacture = {
  title: string;
  select: "KEYCAP" | "HOUSING" | "VENDOR";
  select2: string;
  select3: "ING" | "DONE" | "HOLD";
};

type TResponse = { success?: boolean; message?: string };
