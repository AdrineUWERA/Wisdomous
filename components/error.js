export const ErrorBox = (message) => {
  console.log(message);
  return (
    <p className="text-xs text-red-600 mt-2" id="email-error">
      {message.message}
    </p>
  );
};
