import { useState } from "react";
import { Search, Filter, Plus, Edit3, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface CompletedManga {
  id: string;
  title: string;
  totalChapters: number;
  genre: string;
  completedDate: string;
  rating?: number;
}

export const CompletedMangaScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mangaList] = useState<CompletedManga[]>([
    {
      id: "1",
      title: "Death Note",
      totalChapters: 108,
      genre: "Thriller",
      completedDate: "2024-01-15",
      rating: 5
    },
    {
      id: "2",
      title: "Fullmetal Alchemist",
      totalChapters: 116,
      genre: "Adventure",
      completedDate: "2024-02-20"
    },
    {
      id: "3",
      title: "Tokyo Ghoul",
      totalChapters: 144,
      genre: "Horror",
      completedDate: "2024-03-10",
      rating: 4
    }
  ]);

  const filteredManga = mangaList.filter(manga =>
    manga.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-4">Completed Manga</h1>
        
        {/* Search and Filter */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search completed manga..."
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
          <span>{filteredManga.length} completed</span>
          <span>•</span>
          <span>{filteredManga.reduce((sum, manga) => sum + manga.totalChapters, 0)} total chapters</span>
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
                  
                  {/* Rating */}
                  {manga.rating && (
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-3 h-3 rounded-full ${
                            star <= manga.rating! ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {manga.genre}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {formatDate(manga.completedDate)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {manga.totalChapters} chapters completed
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
                  </div>
                </div>

                {/* Completion Badge */}
                <div className="mt-2">
                  <Badge className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                    ✓ Completed
                  </Badge>
                </div>
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