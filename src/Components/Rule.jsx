import React from 'react'

const Rule = () => {
  return (
    <div className='prose text-start'>
      <h4>Cara Order</h4>
      <ol>
        <li>Lihat pricelist aplikasi</li>
        <li>Pilih contact us untuk menghubungi admin</li>
        <li>isi pesanan sesuai format</li>
        <li>Pilih metode pembayaran</li>
        <li>Kirim bukti pembayaran</li>
        <li>Orderan akan segera di proses setelah pembayaran berhasil</li>
      </ol>
      <p>Estimasi proses orderan kita usahakan secepatnya</p>
      <div className='badge badge-accent h-auto'>
        Minimal 12 Jam - Maximal 24 Jam
      </div>
      <div className='card border mt-8'>
        <div className='card-body p-0'>
          <h2 className='card-title'>**Catatan Penting!!! </h2>
          <p className='text-center'>
            Sebelum Order Mohon Baca Informasi Pricelist Aplikasi
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rule
