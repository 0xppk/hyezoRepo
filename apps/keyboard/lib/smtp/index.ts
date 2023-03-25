type SMTPType = {
  url: string;
  host: string;
  email: string;
};

export const SignInMail = ({ url, host, email }: SMTPType) => {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

  return `
    <div style="display:flex; flex-direction:column; align-items: center; justify-content:center;">
      <h1>로그인 요청 확인</h1>
      <h2>${escapedEmail} 주소로 ${escapedHost}에 로그인을 요청하셨습니다.</h2>
      <h2>본인의 요청이 맞다면 아래의 버튼을 눌러 로그인할 수 있습니다.</h2>
      <h2><a href="${url}">Login to ${escapedHost}</a></h2>
    </div>
  `;
};

export const ActivationMail = ({ url, host, email }: SMTPType) => {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

  return `
    <div style="display:flex; flex-direction:column; align-items: center; justify-content:center;">
      <h1>회원가입 이메일 확인</h1>
      <h2>${escapedEmail} 주소를 ${escapedHost}의 로그인 이메일로 사용하기 위한 확인 메일입니다.</h2>
      <h2>본인의 요청이 맞다면 아래의 버튼을 눌러 회원가입을 완료하세요.</h2>
      <h2><a href="${url}">Activation to sign up ${escapedHost}</a></h2>
      <p>버튼은 24시간 후에 만료됩니다. ${escapedHost}에 접속한 적이 없다면 이 이메일을 무시하시기 바랍니다.</p>
    </div>
  `;
};

// Fallback for non-HTML email clients
export const TextMail = ({ url, host }: Omit<SMTPType, "email">) => {
  return `Sign in to ${host}\n${url}\n\n`;
};
