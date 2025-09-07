import { useState } from "react";
import { User, BookOpen, Award, Clock, Settings, LogOut, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface UserStats {
  totalManga: number;
  completedManga: number;
  ongoingManga: number;
  totalChapters: number;
  favoriteGenre: string;
  readingStreak: number;
}

interface RecentManga {
  id: string;
  title: string;
  lastChapter: number;
  completedDate: string;
}

export const ProfileScreen = () => {
  const [user] = useState({
    name: "Alex Chen",
    email: "alex@example.com",
    avatar: null,
    joinDate: "2024-01-15"
  });

  const [stats] = useState<UserStats>({
    totalManga: 127,
    completedManga: 89,
    ongoingManga: 38,
    totalChapters: 12453,
    favoriteGenre: "Action",
    readingStreak: 15
  });

  const [recentCompleted] = useState<RecentManga[]>([
    { id: "1", title: "Death Note", lastChapter: 108, completedDate: "2024-01-15" },
    { id: "2", title: "Fullmetal Alchemist", lastChapter: 116, completedDate: "2024-02-20" },
    { id: "3", title: "Tokyo Ghoul", lastChapter: 144, completedDate: "2024-03-10" }
  ]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Profile Header */}
      <div className="text-center mb-6 animate-fade-in">
        <div className="relative inline-block mb-4">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage src={user.avatar || undefined} alt={user.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="sm"
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-background border-2 border-muted p-0"
          >
            <Edit3 className="w-4 h-4" />
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
        <p className="text-muted-foreground text-sm mb-2">{user.email}</p>
        <p className="text-xs text-muted-foreground">
          Member since {formatDate(user.joinDate)}
        </p>
      </div>

      <Separator className="mb-6" />

      {/* Stats Grid */}
      <div className="mb-6 animate-slide-up">
        <h2 className="font-semibold text-foreground mb-4">Reading Statistics</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="card-warm p-4 rounded-xl text-center">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.totalManga}</div>
            <div className="text-xs text-muted-foreground">Total Manga</div>
          </div>
          
          <div className="card-warm p-4 rounded-xl text-center">
            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{stats.completedManga}</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="card-warm p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-foreground">{stats.ongoingManga}</div>
            <div className="text-xs text-muted-foreground">Ongoing</div>
          </div>
          
          <div className="card-warm p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-foreground">{stats.totalChapters.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Chapters</div>
          </div>
          
          <div className="card-warm p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-foreground">{stats.readingStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Favorite Genre */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Favorite Genre</h3>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary">
            {stats.favoriteGenre}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Most read category
          </span>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Recent Completed */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Recently Completed</h3>
        <div className="space-y-3">
          {recentCompleted.map((manga) => (
            <div key={manga.id} className="card-warm p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-primary">
                    {manga.title.charAt(0)}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground text-sm truncate">
                    {manga.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {manga.lastChapter} chapters • {formatDate(manga.completedDate)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto space-y-3 animate-fade-in">
        <Button variant="outline" className="w-full">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        
        <Button variant="outline" className="w-full text-destructive hover:text-destructive">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};