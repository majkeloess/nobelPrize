export default function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-2">
      <div className="text-lg xs:text-sm text-black flex justify-center">
        <p>
          ©2024{" "}
          <a target="_blank" href="https://majkeloess.dev">
            {" "}
            Michał Saturczak.
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
