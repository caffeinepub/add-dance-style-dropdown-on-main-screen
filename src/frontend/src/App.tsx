import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music } from 'lucide-react';

const danceStyles = [
  { value: 'bollywood', label: 'Bollywood' },
  { value: 'classical', label: 'Classical' },
  { value: 'semi-classical', label: 'Semi-classical' },
  { value: 'indo-fusion', label: 'Indo Fusion' }
];

function App() {
  const [selectedStyle, setSelectedStyle] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col dance-themed-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Dance Style Selector
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Choose your preferred dance form
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-border/50 backdrop-blur-sm bg-card/95">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Select Dance Style</CardTitle>
              <CardDescription className="text-base">
                Explore various Indian dance forms from traditional to contemporary fusion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="dance-style" className="text-base font-medium">
                  Dance Style
                </Label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger 
                    id="dance-style" 
                    className="w-full h-12 text-base border-border/60 hover:border-primary/50 transition-colors"
                  >
                    <SelectValue placeholder="Choose a dance style..." />
                  </SelectTrigger>
                  <SelectContent>
                    {danceStyles.map((style) => (
                      <SelectItem 
                        key={style.value} 
                        value={style.value}
                        className="text-base cursor-pointer"
                      >
                        {style.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedStyle && (
                  <p className="text-sm text-muted-foreground mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
                    Currently selected: <span className="font-semibold text-foreground">
                      {danceStyles.find(s => s.value === selectedStyle)?.label}
                    </span>
                  </p>
                )}
              </div>

              {/* Info Cards */}
              <div className="grid gap-3 pt-4">
                {selectedStyle === 'bollywood' && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-sm text-foreground/90">
                      Bollywood dance is a vibrant fusion style that combines classical Indian dance with modern movements, popularized by Indian cinema.
                    </p>
                  </div>
                )}
                {selectedStyle === 'classical' && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-sm text-foreground/90">
                      Classical dance forms like Bharatanatyam, Kathak, and Odissi are ancient traditions with rich cultural heritage and precise techniques.
                    </p>
                  </div>
                )}
                {selectedStyle === 'semi-classical' && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-sm text-foreground/90">
                      Semi-classical dance blends classical techniques with lighter, more expressive movements, often seen in folk and devotional performances.
                    </p>
                  </div>
                )}
                {selectedStyle === 'indo-fusion' && (
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-sm text-foreground/90">
                      Indo Fusion combines Indian classical elements with contemporary and international dance styles, creating innovative choreography.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 backdrop-blur-sm bg-background/80 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026. Built with <span className="text-destructive">♥</span> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
