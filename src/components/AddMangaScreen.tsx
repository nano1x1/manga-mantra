import { useState } from "react";
import { ArrowLeft, BookOpen, Hash, Image, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const AddMangaScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    currentChapter: "",
    totalChapters: "",
    status: "",
    genre: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4 animate-fade-in">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Add Manga</h1>
        <Button variant="ghost" size="sm" className="p-2">
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-6 pb-6 no-scrollbar overflow-y-auto animate-slide-up">
        <div className="space-y-6">
          {/* Cover Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Cover Image (Optional)
            </Label>
            <div className="w-full h-48 bg-secondary/50 border-2 border-dashed border-border rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Image className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Tap to add cover</p>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-foreground">
              Manga Title *
            </Label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="title"
                type="text"
                placeholder="Enter manga title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="input-warm pl-10"
              />
            </div>
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
                Current Chapter *
              </Label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="currentChapter"
                  type="number"
                  placeholder="0"
                  value={formData.currentChapter}
                  onChange={(e) => handleInputChange("currentChapter", e.target.value)}
                  className="input-warm pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalChapters" className="text-sm font-medium text-foreground">
                Total Chapters
              </Label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="totalChapters"
                  type="number"
                  placeholder="?"
                  value={formData.totalChapters}
                  onChange={(e) => handleInputChange("totalChapters", e.target.value)}
                  className="input-warm pl-10"
                />
              </div>
            </div>
          </div>

          {/* Status and Genre */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Status *
              </Label>
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

            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Genre
              </Label>
              <Select value={formData.genre} onValueChange={(value) => handleInputChange("genre", value)}>
                <SelectTrigger className="input-warm">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="slice-of-life">Slice of Life</SelectItem>
                  <SelectItem value="supernatural">Supernatural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-foreground">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Write a brief description..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="input-warm min-h-[100px] resize-none"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-4 space-y-3 animate-fade-in">
        <Button className="btn-hero w-full">
          <Save className="w-5 h-5 mr-2" />
          Add to Collection
        </Button>
        <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
          Cancel
        </Button>
      </div>
    </div>
  );
};