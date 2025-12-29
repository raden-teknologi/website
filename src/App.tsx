
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Check, Users, Zap, Shield, Globe } from 'lucide-react';

export default function RadenWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Performa tinggi dengan infrastruktur cloud yang scalable dan reliable"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Safe",
      description: "Enkripsi tingkat enterprise dan compliance dengan standar internasional"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Layanan tersedia di lebih dari 50 negara dengan support 24/7"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Easy Collaboration",
      description: "Tools kolaborasi real-time untuk meningkatkan produktivitas tim"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "Rp 0",
      description: "Untuk tim kecil yang baru memulai",
      features: ["Hingga 2 pengguna", "5GB storage", "Analytics dasar"]
    },
    {
      name: "Professional",
      price: "Rp 159.999",
      description: "Untuk bisnis yang berkembang",
      features: ["Hingga 10 pengguna", "1TB storage", "Priority support", "Advanced analytics", "Custom branding"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Solusi khusus untuk perusahaan besar",
      features: ["Unlimited pengguna", "Unlimited storage", "Dedicated support", "Custom integration", "SLA guarantee"]
    }
  ];

  useEffect(() => {
    document.title = 'Raden';
    let iconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!iconLink) {
      iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      document.head.appendChild(iconLink);
    }
    iconLink.href = '/50 - logo.png';
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-violet-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 shadow-md border-b border-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/50 - logo.png" alt="Raden" className="w-7 h-8" />
              </div>
              {/*<span className="text-xl font-bold text-white">Raden</span>*/}
              <img src='/Typography - white.png' alt='raden-typo' className="w-14 h-6"></img>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-300 hover:text-violet-400 transition">Fitur</a>
              <a href="#pricing" className="text-gray-300 hover:text-violet-400 transition">Harga</a>
              <a href="#about" className="text-gray-300 hover:text-violet-400 transition">Tentang</a>
            </div>

            <div className="hidden md:flex gap-4">
              <button className="px-4 py-2 text-violet-400 font-medium hover:bg-violet-950 rounded-lg transition">
                Login
              </button>
              <button className="px-4 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition">
                Mulai Gratis
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-slate-800">
              <a href="#features" className="block px-4 py-2 text-gray-300 hover:bg-violet-900 rounded">Fitur</a>
              <a href="#pricing" className="block px-4 py-2 text-gray-300 hover:bg-violet-900 rounded">Harga</a>
              <a href="#about" className="block px-4 py-2 text-gray-300 hover:bg-violet-900 rounded">Tentang</a>
              <button className="w-full mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">Mulai Gratis</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Platform Cloude Modern untuk usaha Anda
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Raden adalah solusi aplikasi terpadu yang membantu bisnis Anda berkembang dengan kebutuhan usaha, enterprise, dan support cepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition flex items-center justify-center gap-2">
              Coba Sekarang <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-violet-600 text-violet-400 font-semibold rounded-lg hover:bg-violet-950 transition">
              Lihat Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center mt-16 mb-8">
          <div>
            <p className="text-4xl font-bold text-violet-400">10K+</p>
            <p className="text-gray-400">Pengguna Aktif</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-violet-400">99.9%</p>
            <p className="text-gray-400">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-violet-400">50+</p>
            <p className="text-gray-400">Negara</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900 py-20 border-t border-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-300">Semua yang Anda butuhkan untuk multi user</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-violet-900 to-violet-800 rounded-xl hover:shadow-xl hover:shadow-violet-600/50 transition border border-violet-700">
                <div className="text-violet-400 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Paket Harga</h2>
            <p className="text-xl text-gray-300">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 transition transform hover:scale-105 border ${plan.popular
                    ? 'bg-gradient-to-br from-violet-600 to-violet-700 text-white shadow-2xl shadow-violet-600/50 border-violet-500'
                    : 'bg-slate-900 text-gray-300 shadow-lg border-violet-800 hover:border-violet-600'
                  }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 bg-violet-500 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${!plan.popular && 'text-white'}`}>{plan.name}</h3>
                <p className={`mb-6 ${plan.popular ? 'text-violet-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <p className="text-5xl font-bold mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg">/bulan</span>}
                </p>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${plan.popular
                      ? 'bg-white text-violet-600 hover:bg-violet-50'
                      : 'bg-violet-600 text-white hover:bg-violet-700'
                    }`}
                >
                  Mulai Sekarang
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className={`flex items-center gap-3 ${!plan.popular && 'text-gray-300'}`}>
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-900 py-20 border-t border-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Tentang Raden</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Raden didirikan pada tahun 2025 dengan visi untuk menyediakan platform cloud yang berfokus pada penyedia,  pengembangan, dan implementasi solusi digital inovatif yang efektif dan efisien.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Kami berdiri dengan visi untuk mendorong transformasi digital di berbagai sektor mulai dari UMKM, bisnis daerah, hingga industri nasional melalui penerapan teknologi yang efisien, terukur, dan berkelanjutan..
              </p>
              <p className="text-gray-300 leading-relaxed">
                Raden terus berkembang dan berinovasi untuk memenuhi kebutuhan pasar yang dinamis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-600 to-violet-900 rounded-xl h-96 flex items-center justify-center shadow-2xl shadow-violet-600/50 border border-violet-500">
              <div className="text-white text-center">
                <img src="/LOGO RADEN_Font Putih.png" alt="About Raden" className="w-32 h-40 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-violet-900 text-white py-16 border-t border-violet-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl mb-8 text-violet-100">
            Bergabunglah dengan ribuan bisnis yang telah mempercayai Raden
          </p>
          <button className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition">
            Dapatkan Trial Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 border-t border-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="text-white font-bold">Raden</span>
              </div>
              <p className="text-sm">Platform SaaS modern untuk bisnis Indonesia</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition">Fitur</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Harga</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400 transition">Tentang</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@raden.com" className="hover:text-violet-400 transition">support@raden.com</a></li>
                <li><a href="tel:+6212345678" className="hover:text-violet-400 transition">+62 081..</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-violet-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Raden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}