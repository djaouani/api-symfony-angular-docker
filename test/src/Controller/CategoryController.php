<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;

/**
 * @Route("/api")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route("/categories", name="categories", methods="GET")
     */
    public function index(CategoryRepository $categoryRepository): Response
    {
        $datas = $categoryRepository->findAll(\Doctrine\ORM\Query::HYDRATE_ARRAY);

        return $this->json($datas, 200);
    }
}