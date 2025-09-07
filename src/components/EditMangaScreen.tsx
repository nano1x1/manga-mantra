import { useState } from "react";
import { ArrowLeft, BookOpen, Image, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface EditMangaForm {
  title: string;
  author: string;
  currentChapter: string;
  totalChapters: string;
  status: 'ongoing' | 'completed' | 'dropped' | 'plan-to-read';
  genres: string[];
  synopsis: string;
  rating?: number;
}

export const EditMangaScreen = () => {
  const [formData, setFormData] = useState<EditMangaForm>({
    title: "Attack on Titan",
    author: "Hajime Isayama", 
    currentChapter: "125",
    totalChapters: "139",
    status: "ongoing",
    genres: ["Action", "Drama", "Fantasy"],
    synopsis: "Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason.",
    rating: 5
  });

  const [availableGenres] = useState([
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", 
    "Mystery", "Romance", "Sci-Fi", "Slice of Life", "Sports", "Supernatural", "Thriller"
  ]);

  const handleInputChange = (field: keyof EditMangaForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addGenre = (genre: string) => {
    if (!formData.genres.includes(genre)) {
      setFormData(prev => ({ 
        ...prev, 
        genres: [...prev.genres, genre] 
      }));
    }
  };

  const removeGenre = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.filter(g => g !== genre)
    }));
  };

  const setRating = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <div className="h-full flex flex-col bg-background p-6 no-scrollbar overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-in">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Edit Manga</h1>
        <Button variant="ghost" size="sm" className="p-2">
          <Save className="w-5 h-5" />
        </Button>
      </div>

      {/* Cover Image Section */}
      <div className="mb-6 animate-slide-up">
        <Label className="text-sm font-medium text-foreground mb-3 block">Cover Image</Label>
        <div className="flex items-center gap-4">
          <div className="w-16 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <Button variant="outline" className="flex-1">
            <Image className="w-4 h-4 mr-2" />
            Change Cover
          </Button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6 animate-slide-up">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-foreground">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter manga title"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="input-warm"
          />
        </div>

        {/* Author */}
        <div className="space-y-2">
          <Label htmlFor="author" className="text-sm font-medium text-foreground">
            Author
          </Label>
          <Input
            id="author"
            type="text"
            placeholder="Enter author name"
            value={formData.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
            className="input-warm"
          />
        </div>

        {/* Chapters */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentChapter" className="text-sm font-medium text-foreground">
              Current Chapter
            </Label>
            <Input
              id="currentChapter"
              type="number"
              placeholder="0"
              value={formData.currentChapter}
              onChange={(e) => handleInputChange("currentChapter", e.target.value)}
              className="input-warm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="totalChapters" className="text-sm font-medium text-foreground">
              Total Chapters
            </Label>
            <Input
              id="totalChapters"
              type="number"
              placeholder="Optional"
              value={formData.totalChapters}
              onChange={(e) => handleInputChange("totalChapters", e.target.value)}
              className="input-warm"
            />
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Status</Label>
          <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
            <SelectTrigger className="input-warm">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="dropped">Dropped</SelectItem>
              <SelectItem value="plan-to-read">Plan to Read</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Genres */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Genres</Label>
          
          {/* Selected Genres */}
          <div className="flex flex-wrap gap-2">
            {formData.genres.map((genre) => (
              <Badge 
                key={genre} 
                variant="secondary" 
                className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => removeGenre(genre)}
              >
                {genre}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>

          {/* Add Genre */}
          <Select onValueChange={addGenre}>
            <SelectTrigger className="input-warm">
              <SelectValue placeholder="Add genre" />
            </SelectTrigger>
            <SelectContent>
              {availableGenres
                .filter(genre => !formData.genres.includes(genre))
                .map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground">Rating</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={() => setRating(rating)}
              >
                <div
                  className={`w-6 h-6 rounded-full ${
                    formData.rating && rating <= formData.rating
                      ? 'bg-primary'
                      : 'bg-muted'
                  }`}
                />
              </Button>
            ))}
            {formData.rating && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
                onClick={() => setFormData(prev => ({ ...prev, rating: undefined }))}
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Synopsis */}
        <div className="space-y-2">
          <Label htmlFor="synopsis" className="text-sm font-medium text-foreground">
            Synopsis
          </Label>
          <Textarea
            id="synopsis"
            placeholder="Enter manga synopsis..."
            value={formData.synopsis}
            onChange={(e) => handleInputChange("synopsis", e.target.value)}
            className="input-warm min-h-[100px] resize-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 space-y-3 animate-fade-in">
        <Button className="btn-hero w-full">
          Save Changes
        </Button>
        
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
};