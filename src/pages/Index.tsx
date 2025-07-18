import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [credits, setCredits] = useState(100);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingProgress, setGeneratingProgress] = useState(0);

  const handleGenerate = async () => {
    if (credits < 10) {
      alert('Недостаточно кредитов! Купите премиум подписку.');
      return;
    }
    
    setIsGenerating(true);
    setGeneratingProgress(0);
    
    const interval = setInterval(() => {
      setGeneratingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setCredits(prev => prev - 10);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const sampleVideos = [
    {
      title: 'Космическое путешествие',
      thumbnail: '/placeholder.svg',
      duration: '0:15',
      prompt: 'Астронавт летит через галактику мимо звезд и планет'
    },
    {
      title: 'Городской пейзаж',
      thumbnail: '/placeholder.svg',
      duration: '0:12',
      prompt: 'Современный город с небоскребами на закате'
    },
    {
      title: 'Природа в движении',
      thumbnail: '/placeholder.svg',
      duration: '0:18',
      prompt: 'Водопад в тропическом лесу с радугой'
    },
    {
      title: 'Технологии будущего',
      thumbnail: '/placeholder.svg',
      duration: '0:10',
      prompt: 'Роботы работают в футуристической лаборатории'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-emerald-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Video" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI VideoGen
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Coins" className="w-5 h-5 text-purple-500" />
                <span className="font-semibold text-purple-700">{credits} кредитов</span>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="User" className="w-4 h-4 mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
            Создавайте видео из текста
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Превратите ваши идеи в потрясающие видео с помощью ИИ всего за несколько секунд
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Мгновенно</div>
                <div className="text-sm text-gray-500">Генерация за 30 сек</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="w-6 h-6 text-pink-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Качество HD</div>
                <div className="text-sm text-gray-500">1080p видео</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Icon name="Palette" className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Любой стиль</div>
                <div className="text-sm text-gray-500">Безграничные возможности</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="generate">Генератор</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
            <TabsTrigger value="pricing">Тарифы</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Wand2" className="w-5 h-5 text-purple-600" />
                  <span>Генерация видео</span>
                </CardTitle>
                <CardDescription>
                  Опишите желаемое видео и получите результат за 30 секунд
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Описание видео</label>
                  <Textarea
                    placeholder="Например: Астронавт исследует красивую планету с двумя солнцами, фантастический пейзаж..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Длительность</label>
                    <Input value="15 секунд" disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Качество</label>
                    <Input value="HD 1080p" disabled />
                  </div>
                </div>

                {isGenerating && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Генерация видео...</span>
                      <span>{generatingProgress}%</span>
                    </div>
                    <Progress value={generatingProgress} className="w-full" />
                  </div>
                )}

                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt || isGenerating || credits < 10}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Генерируем...
                    </>
                  ) : (
                    <>
                      <Icon name="Play" className="w-4 h-4 mr-2" />
                      Создать видео (-10 кредитов)
                    </>
                  )}
                </Button>
                
                {credits < 10 && (
                  <div className="text-center text-sm text-red-600">
                    Недостаточно кредитов для генерации
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Галерея видео</h2>
              <p className="text-gray-600">Примеры видео, созданных с помощью AI VideoGen</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <Icon name="Play" className="w-12 h-12 text-white bg-black/20 rounded-full p-3 cursor-pointer hover:bg-black/30 transition-colors" />
                    <Badge className="absolute top-2 right-2 bg-white/90 text-black">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{video.prompt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Тарифные планы</h2>
              <p className="text-gray-600">Выберите подходящий план для ваших потребностей</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Бесплатный</span>
                    <Badge variant="secondary">Текущий</Badge>
                  </CardTitle>
                  <CardDescription>Для знакомства с сервисом</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">$0</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      100 кредитов при регистрации
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      10 видео (10 кредитов за видео)
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      HD качество 1080p
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Длительность до 15 секунд
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Активный план
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Популярный
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Premium</span>
                    <Badge variant="outline" className="border-purple-200">
                      Рекомендуем
                    </Badge>
                  </CardTitle>
                  <CardDescription>Для профессионального использования</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-purple-600">$23</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Безлимитные кредиты
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Неограниченное количество видео
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      4K качество
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Длительность до 60 секунд
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Приоритетная обработка
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" className="w-4 h-4 text-green-600 mr-2" />
                      Коммерческое использование
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Icon name="Crown" className="w-4 h-4 mr-2" />
                    Купить Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="User" className="w-5 h-5 text-purple-600" />
                  <span>Профиль пользователя</span>
                </CardTitle>
                <CardDescription>
                  Управляйте своим аккаунтом и статистикой
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="User" className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Пользователь #1234</h3>
                    <p className="text-gray-600">Участник с декабря 2024</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Icon name="Coins" className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{credits}</div>
                    <div className="text-sm text-gray-600">Кредиты</div>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg text-center">
                    <Icon name="Video" className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-pink-600">{Math.floor((100 - credits) / 10)}</div>
                    <div className="text-sm text-gray-600">Видео создано</div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <Icon name="Calendar" className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">7</div>
                    <div className="text-sm text-gray-600">Дней активности</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Настройки аккаунта</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Settings" className="w-4 h-4 mr-2" />
                      Общие настройки
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Download" className="w-4 h-4 mr-2" />
                      Скачать мои видео
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Bell" className="w-4 h-4 mr-2" />
                      Уведомления
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}