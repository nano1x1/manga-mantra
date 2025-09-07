import { useState } from "react";
import { Search, Plus, Filter, BookOpen, CheckCircle2, Star, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MangaItem {
  id: string;
  title: string;
  currentChapter: number;
  totalChapters?: number;
  isFavorite: boolean;
  status: "ongoing" | "completed";
  lastRead?: string;
}

const mockManga: MangaItem[] = [
  {
    id: "1",
    title: "Attack on Titan",
    currentChapter: 139,
    totalChapters: 139,
    isFavorite: true,
    status: "completed",
    lastRead: "2 days ago"
  },
  {
    id: "2",
    title: "One Piece",
    currentChapter: 1095,
    isFavorite: true,
    status: "ongoing",
    lastRead: "1 day ago"
  },
  {
    id: "3",
    title: "Demon Slayer",
    currentChapter: 205,
    totalChapters: 205,
    isFavorite: false,
    status: "completed",
    lastRead: "1 week ago"
  },
  {
    id: "4",
    title: "My Hero Academia",
    currentChapter: 398,
    isFavorite: true,
    status: "ongoing",
    lastRead: "3 days ago"
  }
];

export const DashboardScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ongoing");

  const ongoingManga = mockManga.filter(manga => manga.status === "ongoing");
  const completedManga = mockManga.filter(manga => manga.status === "completed");

  const MangaCard = ({ manga }: { manga: MangaItem }) => (
    <div className="card-manga group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground line-clamp-1 mb-1">
            {manga.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Chapter {manga.currentChapter}
            {manga.totalChapters && ` of ${manga.totalChapters}`}
          </p>
          {manga.lastRead && (
            <p className="text-xs text-muted-foreground mt-1">
              Last read {manga.lastRead}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={`p-1 ${manga.isFavorite ? 'text-warning' : 'text-muted-foreground'}`}
          >
            <Star className={`w-4 h-4 ${manga.isFavorite ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Progress bar */}
      {manga.totalChapters && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-muted-foreground">Progress</span>
            <span className="text-xs text-muted-foreground">
              {Math.round((manga.currentChapter / manga.totalChapters) * 100)}%
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${(manga.currentChapter / manga.totalChapters) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {manga.status === "completed" ? (
            <div className="flex items-center gap-1 text-success">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-primary">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-medium">Reading</span>
            </div>
          )}
        </div>
        <Button size="sm" variant="ghost" className="btn-soft text-xs px-3 py-1">
          Update
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="p-6 pb-4 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Manga</h1>
            <p className="text-muted-foreground">
              {ongoingManga.length} ongoing • {completedManga.length} completed
            </p>
          </div>
          <Button className="btn-soft p-3">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search your manga..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-warm pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-1 flex flex-col">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsList className="mx-6 mb-4 bg-secondary/50 p-1 rounded-xl">
            <TabsTrigger 
              value="ongoing" 
              className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Ongoing ({ongoingManga.length})
            </TabsTrigger>
            <TabsTrigger 
              value="completed"
              className="flex-1 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Completed ({completedManga.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="flex-1 px-6 pb-6 m-0">
            <div className="space-y-4 no-scrollbar overflow-y-auto h-full animate-slide-up">
              {ongoingManga.map((manga) => (
                <MangaCard key={manga.id} manga={manga} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="flex-1 px-6 pb-6 m-0">
            <div className="space-y-4 no-scrollbar overflow-y-auto h-full animate-slide-up">
              {completedManga.map((manga) => (
                <MangaCard key={manga.id} manga={manga} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6">
        <Button className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary-hover animate-scale-in">
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};