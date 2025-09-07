import { useState } from "react";
import { Search, Filter, Plus, Heart, Edit3, Trash2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Manga {
  id: string;
  title: string;
  currentChapter: number;
  totalChapters?: number;
  genre: string;
  isFavorite: boolean;
  lastRead: string;
}

export const OngoingMangaScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mangaList] = useState<Manga[]>([
    {
      id: "1",
      title: "Attack on Titan",
      currentChapter: 125,
      totalChapters: 139,
      genre: "Action",
      isFavorite: true,
      lastRead: "2 days ago"
    },
    {
      id: "2", 
      title: "One Piece",
      currentChapter: 1095,
      genre: "Adventure",
      isFavorite: false,
      lastRead: "1 week ago"
    },
    {
      id: "3",
      title: "Jujutsu Kaisen", 
      currentChapter: 245,
      genre: "Supernatural",
      isFavorite: true,
      lastRead: "3 days ago"
    }
  ]);

  const filteredManga = mangaList.filter(manga =>
    manga.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-4">Ongoing Manga</h1>
        
        {/* Search and Filter */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search manga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-warm pl-9"
            />
          </div>
          <Button variant="outline" size="sm" className="px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{filteredManga.length} manga</span>
          <span>•</span>
          <span>{filteredManga.filter(m => m.isFavorite).length} favorites</span>
        </div>
      </div>

      {/* Manga List */}
      <div className="flex-1 space-y-4 animate-slide-up">
        {filteredManga.map((manga) => (
          <div 
            key={manga.id}
            className="card-warm p-4 rounded-xl animate-fade-in"
          >
            <div className="flex items-start gap-3">
              {/* Manga Cover Placeholder */}
              <div className="w-12 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary">
                  {manga.title.charAt(0)}
                </span>
              </div>

              {/* Manga Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground truncate pr-2">
                    {manga.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-1 h-auto"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        manga.isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </Button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {manga.genre}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {manga.lastRead}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Chapter {manga.currentChapter}
                    {manga.totalChapters && ` / ${manga.totalChapters}`}
                  </div>
                  
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 h-auto text-muted-foreground hover:text-foreground"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 h-auto text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 h-auto text-muted-foreground hover:text-primary"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Progress Bar */}
                {manga.totalChapters && (
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all"
                        style={{ 
                          width: `${(manga.currentChapter / manga.totalChapters) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <Button className="btn-hero fixed bottom-6 right-6 w-14 h-14 rounded-full p-0 shadow-elegant">
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
};