import Image from 'next/image'

import { EmailSignupForm } from '@/components/EmailSubmit'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <div className="relative overflow-hidden bg-slate-100 py-32">

      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl tracking-tight text-gray-800 sm:text-4xl">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-800 pb-10 pt-4">
            Unlock new opportunities with high quality legal data.
          </p>
          <EmailSignupForm/>
          <p className="mt-4 text-lg tracking-tight text-gray-800 pb-10 pt-4">
            <span className="">Want to talk? Email us:</span><br/>
            <a href="mailto:info@lexpipe.com" className="text-primary-700">info@lexpipe.com</a>
          </p>
        </div>
      </Container>
    </div>
  )
}
