<?php

namespace App\Listeners;

use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Statamic\Events\EntrySaved;
use Statamic\Entries\Entry;

class GenerateBlogPostImage
{
    const IMAGE_WIDTH = 1200;
    const IMAGE_HEIGHT = 627;

    protected string $baseImagePath;
    protected $imageManager;

    public function __construct()
    {
        $this->baseImagePath = public_path('assets/posts');

        $this->imageManager = new ImageManager([
            'driver' => 'imagick',
        ]);
    }

    public function handle(EntrySaved $event): void
    {
        /** @var Entry $entry */
        $entry = $event->entry;

        if($entry->collectionHandle() == 'posts' && $entry->published() === true) {
            // Create the image
            $image = $this->imageManager->canvas(self::IMAGE_WIDTH, self::IMAGE_HEIGHT, '#E5E7EB');
            
            // Title
            $image->text($entry->title, self::IMAGE_WIDTH/2, self::IMAGE_HEIGHT/2, function ($font) {
                $font->size(46);
                $font->color('#111827');
                $font->file(storage_path('Rubik.ttf'));
                $font->align('center');
                $font->valign('middle');
            });

            // Website
            $image->text('codedge.de', self::IMAGE_WIDTH/2, self::IMAGE_HEIGHT/1.25, function($font) {
                $font->size(28);
                $font->color('#ff6633');
                $font->file(storage_path('Rubik.ttf'));
                $font->align('center');
            });

            // Save the image
            $imagesPath = $this->baseImagePath . '/' . Str::slug($entry->title).'.png';
            $image->save($imagesPath, 100);
        }
    }
}
