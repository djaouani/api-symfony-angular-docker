<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Form\ArticleType;

/**
 * @Route("/api")
 */
class ArticleController extends AbstractController
{
    /**
     * @Route("/articles", name="articles", methods="GET")
     */
    public function getArticles(ArticleRepository $articleRepository): Response
    {
        $datas = $articleRepository->findAll(\Doctrine\ORM\Query::HYDRATE_ARRAY);
        
        return $this->json($datas, 200);
    }


    /**
     * Create article
     * @Route("/articles", name="articles_add", methods="POST")
     */
    public function postArticle(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        
        $data = json_decode($request->getContent(), true);
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        $form->submit($data);
        
        if ($form->isSubmitted() && $form->isValid()) {
            
            $entityManager->persist($article);
            $entityManager->flush();
            
            return $this->json($data, 201);
        } else {
            return $this->json(['status' => 'error'], 400);
        }
    }

    /**
     * Delete article
     * @Route("/articles/{id}", name="articles_del", methods="DELETE")
     */
    public function deleteArticle(Article $article): Response
    {
        if ($article) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($article);
            $entityManager->flush();
            return $this->json(['status' => 'error'], 204);
        } else{
            return $this->json([], 400);
        }
    }

     /**
      * Update article
     * @Route("/articles", name="articles_put", methods="PUT")
     */
    public function putArticle(Request $request, Article $article): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        
        $data = json_decode($request->getContent(), true);
        $form = $this->createForm(ArticleType::class, $article);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();
            return $this->json($datas, 201);
        } else {
            return $this->json(['status' => 'error'], 400);
        }
    }
	
	/**
     * @Route("/articles/{slug}", name="article_get", methods="GET")
     */
    public function getArticle($slug, ArticleRepository $articleRepository): Response
    {
        $article = $articleRepository->findOneBy(['slug' => $slug]);
        
        if (!$article) {
            return $this->json(['status' => 'error'], 404);
        } else{
            return $this->json($article, 200);
        }
    }
	
}
