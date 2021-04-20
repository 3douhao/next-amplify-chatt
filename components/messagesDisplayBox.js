export default function MessageDisplayBox({
  isHidden,
  messages
}) {
  return (
    <div
      className={`${
        isHidden ? 'hidden' : ''
      } text-3xl bg-gray-300 h-80 w-2/3 mx-auto`}
    >
      {messages?.map(message => (
        <h1 key={message.id}>{message.content}</h1>
      ))}
    </div>
  )
}
