import { useState } from "react";
import { ArrowLeft, Heart, Edit3, Trash2, Star, Calendar, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface MangaDetail {
  id: string;
  title: string;
  author: string;
  genre: string[];
  status: 'ongoing' | 'completed';
  currentChapter: number;
  totalChapters?: number;
  synopsis: string;
  rating?: number;
  isFavorite: boolean;
  startDate?: string;
  completedDate?: string;
  lastRead: string;
}

export const MangaDetailScreen = () => {
  const [manga] = useState<MangaDetail>({
    id: "1",
    title: "Attack on Titan",
    author: "Hajime Isayama",
    genre: ["Action", "Drama", "Fantasy"],
    status: "ongoing",
    currentChapter: 125,
    totalChapters: 139,
    synopsis: "Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason. The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.",
    rating: 5,
    isFavorite: true,
    startDate: "2024-01-15",
    lastRead: "2 days ago"
  });

  const [isFavorite, setIsFavorite] = useState(manga.isFavorite);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="h-full flex flex-col bg-background no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4 animate-fade-in">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Manga Details</h1>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
              }`}
            />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-6 animate-slide-up">
        {/* Cover and Basic Info */}
        <div className="flex gap-4 mb-6">
          <div className="w-24 h-32 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-foreground mb-2">{manga.title}</h2>
            
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{manga.author}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {manga.genre.map((g) => (
                <Badge key={g} variant="secondary" className="text-xs">
                  {g}
                </Badge>
              ))}
            </div>

            {/* Rating */}
            {manga.rating && (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= manga.rating! 
                          ? 'fill-primary text-primary' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {manga.rating}/5
                </span>
              </div>
            )}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Progress Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">Reading Progress</h3>
          
          <div className="card-warm p-4 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Current Chapter</span>
              <span className="font-medium text-foreground">
                {manga.currentChapter}
                {manga.totalChapters && ` / ${manga.totalChapters}`}
              </span>
            </div>

            {manga.totalChapters && (
              <>
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ 
                      width: `${(manga.currentChapter / manga.totalChapters) * 100}%` 
                    }}
                  />
                </div>
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{Math.round((manga.currentChapter / manga.totalChapters) * 100)}% complete</span>
                  <span>{manga.totalChapters - manga.currentChapter} chapters left</span>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="card-warm p-3 rounded-lg text-center">
              <div className="text-xs text-muted-foreground mb-1">Status</div>
              <Badge 
                className={`text-xs ${
                  manga.status === 'completed' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {manga.status === 'completed' ? 'Completed' : 'Ongoing'}
              </Badge>
            </div>
            
            <div className="card-warm p-3 rounded-lg text-center">
              <div className="text-xs text-muted-foreground mb-1">Last Read</div>
              <div className="text-sm font-medium text-foreground">{manga.lastRead}</div>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Synopsis */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">Synopsis</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {manga.synopsis}
          </p>
        </div>

        <Separator className="mb-6" />

        {/* Details */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground mb-3">Details</h3>
          
          {manga.startDate && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Started Reading</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {formatDate(manga.startDate)}
              </span>
            </div>
          )}

          {manga.completedDate && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Completed</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {formatDate(manga.completedDate)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-4 space-y-3">
        <Button className="btn-hero w-full">
          {manga.status === 'ongoing' ? 'Mark as Completed' : 'Mark as Ongoing'}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" className="w-full text-destructive hover:text-destructive">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};