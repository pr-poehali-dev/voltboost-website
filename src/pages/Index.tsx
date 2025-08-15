import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full z-50 bg-gradient-to-r from-black to-gray-900 border-b border-yellow-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 tracking-wider">
              VOLT <span className="text-white font-light">BOOST</span>
            </h1>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto bg-black md:bg-transparent border-t md:border-t-0 border-yellow-500/20 md:border-0 flex-col md:flex-row items-center p-8 md:p-0 gap-6 md:gap-8`}>
            <a href="#home" className="text-white hover:text-yellow-500 transition-colors font-medium">Главная</a>
            <a href="#services" className="text-white hover:text-yellow-500 transition-colors font-medium">Услуги</a>
            <a href="#about" className="text-white hover:text-yellow-500 transition-colors font-medium">О нас</a>
            <a href="#contact" className="text-white hover:text-yellow-500 transition-colors font-medium">Контакты</a>
          </nav>

          <a
            href="tel:+79222875789"
            className="hidden md:flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1"
          >
            <Icon name="Phone" size={16} />
            +7 (922) 287-57-89
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональные <span className="text-yellow-500">энергетические решения</span> для вашего бизнеса
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              LLC VOLT BOOST предлагает комплексные услуги по электромонтажу, проектированию и обслуживанию энергосистем. Надежность и качество - наш приоритет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 text-center"
              >
                Заказать консультацию
              </a>
              <a
                href="#services"
                className="border-2 border-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500/10 transition-all hover:-translate-y-1 text-center"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Почему выбирают нас</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Мы предлагаем инновационные решения в сфере энергоснабжения с гарантией качества и надежности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрое подключение",
                description: "Минимальные сроки выполнения работ без потери качества"
              },
              {
                icon: "Shield",
                title: "Гарантия безопасности",
                description: "Все работы выполняются в строгом соответствии с нормами и стандартами"
              },
              {
                icon: "Settings",
                title: "Современное оборудование",
                description: "Используем только проверенные материалы и технологии"
              },
              {
                icon: "Headphones",
                title: "Круглосуточная поддержка",
                description: "Готовы помочь в любое время дня и ночи"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-black border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-300">Комплексные решения для предприятий и частных клиентов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "Plug",
                title: "Электромонтажные работы",
                description: "Полный комплекс электромонтажных работ любой сложности с гарантией качества и соблюдением всех норм безопасности.",
                linkText: "Заказать",
                href: "#contact"
              },
              {
                icon: "Wrench",
                title: "Ремонт электрооборудования",
                description: "Диагностика и ремонт промышленного и бытового электрооборудования с использованием профессионального инструмента.",
                linkText: "Заказать",
                href: "#contact"
              },
              {
                icon: "GitBranch",
                title: "Проектирование энергосистем",
                description: "Разработка индивидуальных проектов электроснабжения с учетом всех особенностей объекта и требований заказчика.",
                linkText: "Заказать",
                href: "#contact"
              },
              {
                icon: "Truck",
                title: "Аварийная служба",
                description: "Круглосуточная помощь при авариях в электросетях. Быстрое реагирование и качественное устранение неисправностей.",
                linkText: "Позвонить",
                href: "tel:+79222875789"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gray-900 border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:-translate-y-2 overflow-hidden group">
                <div className="h-48 bg-yellow-500 flex items-center justify-center">
                  <Icon name={service.icon as any} size={60} className="text-black" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-500">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-yellow-500 font-semibold hover:text-yellow-400 transition-colors group"
                  >
                    {service.linkText}
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">О компании</h3>
            <p className="text-xl text-gray-300">VOLT BOOST - надежный партнер в сфере энергетических решений</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Clock",
                title: "Опыт работы",
                description: "Более 10 лет успешной работы на рынке энергетических услуг"
              },
              {
                icon: "Users",
                title: "Команда профессионалов",
                description: "Квалифицированные специалисты с большим практическим опытом"
              },
              {
                icon: "Award",
                title: "Лицензии и сертификаты",
                description: "Все необходимые разрешительные документы для выполнения работ"
              },
              {
                icon: "CheckCircle",
                title: "Гарантия качества",
                description: "Мы уверены в качестве наших услуг и предоставляем гарантию на все работы"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-black border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-300">Готовы ответить на все ваши вопросы и предложить оптимальное решение</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-2xl font-semibold text-yellow-500">Контактная информация</h4>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "MapPin",
                    title: "Адрес:",
                    value: "г. Москва, ул. Энергетиков, 15"
                  },
                  {
                    icon: "Phone",
                    title: "Телефон:",
                    value: "+7 (922) 287-57-89",
                    href: "tel:+79222875789"
                  },
                  {
                    icon: "Mail",
                    title: "Email:",
                    value: "volt.boost.89@mail.ru",
                    href: "mailto:volt.boost.89@mail.ru"
                  },
                  {
                    icon: "Clock",
                    title: "График работы:",
                    value: "Пн-Пт: 9:00 - 18:00\nСб-Вс: по запросу"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} size={20} className="text-black" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{contact.title}</h5>
                      {contact.href ? (
                        <a href={contact.href} className="text-yellow-500 font-medium hover:text-yellow-400 transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-yellow-500 mb-4">Мы в соцсетях</h4>
                <div className="flex gap-4">
                  {['MessageCircle', 'Send', 'Phone', 'Camera'].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all hover:-translate-y-1"
                    >
                      <Icon name={icon as any} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-black border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Заказать консультацию</CardTitle>
                <p className="text-gray-300">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Ваше имя</label>
                    <Input
                      id="name"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Телефон</label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Сообщение</label>
                    <Textarea
                      id="message"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
                      placeholder="Опишите ваш проект или задачу"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 text-lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-yellow-500 text-lg font-semibold mb-4 relative pb-2">
                О компании
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500"></span>
              </h5>
              <p className="text-gray-300 mb-4 leading-relaxed">
                LLC VOLT BOOST - профессиональные услуги в сфере электромонтажа и энергоснабжения с 2010 года.
              </p>
              <div className="flex gap-3">
                {['MessageCircle', 'Send', 'Phone'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <Icon name={icon as any} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-yellow-500 text-lg font-semibold mb-4 relative pb-2">
                Услуги
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500"></span>
              </h5>
              <ul className="space-y-2">
                {['Электромонтажные работы', 'Ремонт электрооборудования', 'Проектирование энергосистем', 'Аварийная служба'].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors hover:pl-2">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-yellow-500 text-lg font-semibold mb-4 relative pb-2">
                Контакты
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500"></span>
              </h5>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Энергетиков, 15
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79222875789" className="hover:text-yellow-500 transition-colors">
                    +7 (922) 287-57-89
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:volt.boost.89@mail.ru" className="hover:text-yellow-500 transition-colors">
                    volt.boost.89@mail.ru
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-yellow-500 text-lg font-semibold mb-4 relative pb-2">
                Рабочие часы
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-500"></span>
              </h5>
              <div className="space-y-1 text-gray-300">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: по запросу</p>
                <p>Аварийная служба: 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2023 LLC VOLT BOOST. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all hover:-translate-y-1 shadow-lg z-40"
        >
          <Icon name="ArrowUp" size={20} />
        </button>
      )}
    </div>
  );
};

export default Index;