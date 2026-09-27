import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFilled =
    form.name.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.passwordConfirm.trim();
  const isPasswordMatched =
    form.password !== "" && form.password === form.passwordConfirm;
  const canSubmit = Boolean(isFilled && isPasswordMatched);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    window.alert(`${form.name}님, 회원가입이 완료되었습니다.`);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-6 bg-white rounded-2xl p-8 shadow-sm"
      >
        <h1 className="title-sm text-neutral-700">회원가입</h1>

        <div className="flex flex-col gap-4">
          <Input
            label="이름"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요."
          />
          <Input
            label="이메일"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요."
            autoComplete="off"
          />
          <Input
            label="비밀번호"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요."
            autoComplete="new-password"
          />
          <Input
            label="비밀번호 확인"
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요."
            autoComplete="new-password"
          />
          {form.passwordConfirm !== "" && !isPasswordMatched && (
            <p className="caption text-red-500">
              비밀번호가 일치하지 않습니다.
            </p>
          )}
        </div>

        <Button
          type="submit"
          text="회원가입"
          disabled={!canSubmit}
          fullWidth
        />
      </form>
    </main>
  );
}
