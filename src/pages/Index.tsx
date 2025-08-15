import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-voltBlue-950">
      {/* Header/Navigation */}
      <header className="bg-voltBlue-900/95 backdrop-blur-sm border-b border-voltBlue-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-voltOrange-500" size={32} />
              <h1 className="text-2xl font-bold text-white">VOLTBOOST</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-voltOrange-500 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-300 hover:text-voltOrange-500 transition-colors">О компании</a>
              <a href="#portfolio" className="text-gray-300 hover:text-voltOrange-500 transition-colors">Портфолио</a>
              <a href="#contact" className="text-gray-300 hover:text-voltOrange-500 transition-colors">Контакты</a>
              <Button className="bg-voltOrange-500 hover:bg-voltOrange-600 text-white">
                <Icon name="Phone" size={16} className="mr-2" />
                24/7 Поддержка
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/img/c20fb24e-8329-4502-8976-ee8932aa2bf3.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-voltBlue-950 via-voltBlue-900/90 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Надежные решения для 
              <span className="text-voltOrange-500"> безопасности</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Профессиональный электромонтаж, системы пожарной и охранной сигнализации, 
              видеонаблюдение и проектирование систем безопасности для вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-voltOrange-500 hover:bg-voltOrange-600 text-white px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-voltOrange-500 text-voltOrange-500 hover:bg-voltOrange-500 hover:text-white px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-voltBlue-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Полный спектр услуг по проектированию, установке и обслуживанию систем безопасности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Zap",
                title: "Электромонтаж",
                description: "Разводка сетей, установка щитов, подключение оборудования"
              },
              {
                icon: "Flame",
                title: "Пожарная сигнализация",
                description: "Монтаж, обслуживание, интеграция с СОУЭ"
              },
              {
                icon: "Shield",
                title: "Охранная сигнализация",
                description: "Датчики, GSM-управление, пультовая охрана"
              },
              {
                icon: "Camera",
                title: "Видеонаблюдение",
                description: "IP-камеры, облачное хранение, аналитика"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-voltBlue-800 border-voltBlue-700 hover:border-voltOrange-500 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-voltOrange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-voltBlue-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Почему выбирают нас</h3>
            <p className="text-xl text-gray-300">Профессионализм, надежность и качество в каждом проекте</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Лицензии и сертификаты",
                description: "Все необходимые разрешения для работы с системами безопасности",
                color: "text-voltOrange-500"
              },
              {
                icon: "Clock",
                title: "24/7 Поддержка",
                description: "Круглосуточная техническая поддержка и экстренный выезд",
                color: "text-blue-400"
              },
              {
                icon: "CheckCircle",
                title: "Гарантия качества",
                description: "Расширенная гарантия на все виды работ и оборудование",
                color: "text-green-400"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-voltBlue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-voltBlue-700 transition-colors duration-300">
                  <Icon name={advantage.icon as any} size={32} className={advantage.color} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{advantage.title}</h4>
                <p className="text-gray-300 text-lg">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-voltBlue-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Портфолио проектов</h3>
            <p className="text-xl text-gray-300">Примеры успешно реализованных объектов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Торговый центр «Галерея»",
                type: "Комплексная система безопасности",
                area: "15,000 м²"
              },
              {
                title: "Логистический комплекс",
                type: "Видеонаблюдение + СКУД",
                area: "25,000 м²"
              },
              {
                title: "Офисный центр «Синергия»",
                type: "Пожарная сигнализация",
                area: "8,000 м²"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-voltBlue-800 border-voltBlue-700 overflow-hidden group hover:border-voltOrange-500 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-voltBlue-700 to-voltBlue-800 flex items-center justify-center">
                  <Icon name="Building" size={48} className="text-voltOrange-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <p className="text-voltOrange-500">{project.type}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-300">
                    <Icon name="SquareActivity" size={16} className="mr-2" />
                    <span>Площадь: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-voltBlue-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h3>
              <p className="text-xl text-gray-300 mb-8">
                Получите бесплатную консультацию и расчет стоимости проекта
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "Phone",
                    title: "Телефон",
                    value: "+7 (495) 123-45-67",
                    subtitle: "Круглосуточно"
                  },
                  {
                    icon: "Mail",
                    title: "Email",
                    value: "info@voltboost.ru",
                    subtitle: "Ответим в течение часа"
                  },
                  {
                    icon: "MapPin",
                    title: "Адрес",
                    value: "г. Москва, ул. Электромонтажная, д. 15",
                    subtitle: "Офис и склад"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-voltOrange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{contact.title}</h4>
                      <p className="text-voltOrange-500 font-medium">{contact.value}</p>
                      <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-voltBlue-800 border-voltBlue-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Получить консультацию</CardTitle>
                <p className="text-gray-300">Заполните форму, и мы свяжемся с вами в течение 15 минут</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-voltBlue-700 border-voltBlue-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    className="bg-voltBlue-700 border-voltBlue-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    className="bg-voltBlue-700 border-voltBlue-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш проект" 
                    className="bg-voltBlue-700 border-voltBlue-600 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-voltOrange-500 hover:bg-voltOrange-600 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-voltBlue-900 border-t border-voltBlue-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-voltOrange-500" size={24} />
                <h4 className="text-xl font-bold text-white">VOLTBOOST</h4>
              </div>
              <p className="text-gray-300">
                Профессиональные решения для безопасности вашего бизнеса
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Электромонтаж</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Пожарная сигнализация</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Охранная сигнализация</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Видеонаблюдение</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Партнеры</a></li>
                <li><a href="#" className="hover:text-voltOrange-500 transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@voltboost.ru</p>
                <p>г. Москва, ул. Электромонтажная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-voltBlue-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 VOLTBOOST. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;