export default function InputBox({
  value,
  onChange,
  onClick,
  onKeyDown
}) {
  return (
    <div className='flex w-2/3 h-auto mx-auto mt-8 mb-8 bg-gray-300'>
      <input
        type='text'
        className='flex-1 border border-purple-500'
        placeholder='Type something here...'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      <button type='submit' onClick={onClick}>
        Send
      </button>
    </div>
  )
}
