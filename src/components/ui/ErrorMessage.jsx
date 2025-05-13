import { FaExclamationTriangle } from 'react-icons/fa'

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-error-500 mb-4">
        <FaExclamationTriangle size={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-error-900">Error</h3>
      <p className="text-neutral-700 mb-6">{message}</p>
      <p className="text-neutral-600">
        Please check your network connection or try again later.
      </p>
    </div>
  )
}

export default ErrorMessage