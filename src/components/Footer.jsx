import React from 'react'

export default function Footer() {
  return (
      <footer class="bg-gray-900 text-white py-8 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between gap-8 text-sm md:text-base">
     
      <div>
        <h3 class="font-semibold text-lg mb-2">© 2025 NIT Jamshedpur</h3>
        <p>All rights reserved.</p>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-2">Contact Us</h3>
        <p>Email: conference2025@nitjsr.ac.in</p>
        <p>Phone: +91 12345 67890</p>
        <p>Address: NIT Jamshedpur, Jharkhand, India</p>
      </div>
      <div>
        <h3 class="font-semibold text-lg mb-2">Links</h3>
        <div class="space-y-1">
          <div>
            <a href="https://www.nitjsr.ac.in" target="_blank" class="hover:underline !text-blue-400">NIT Jamshedpur Website</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 border-t border-gray-700 pt-3 text-center text-gray-400 text-sm">
      Made with ❤️ at NIT Jamshedpur by Anshu Raj
    </div>
  </div>
</footer>

  )
}
