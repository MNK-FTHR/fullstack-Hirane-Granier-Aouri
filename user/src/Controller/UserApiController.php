<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/', name: 'app_user_api')]
class UserApiController extends AbstractController
{

    #[Route('/', methods: "GET")]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json([
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()]
        );
    }


    #[Route('/hello', name: 'hello', methods: "GET")]
    public function checkhello(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $hello = $data["hello"];
        
        if (!$user) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($hello, $user->getHello()));

    }


    #[Route('/user', name: 'user', methods: "GET")]
    public function checkuser(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $user = $data["user"];
        if (!$user) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($user, $user->getUser()));
    }


    #[Route('/admin', name: 'admin', methods: "GET")]
    public function checkadmin(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $admin = $data["admin"];
        if (!$admin) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($admin, $user->getAdmin()));
    }


    #[Route('/checkrole', name: 'app_user_api_check_role', methods: "POST")]
    public function checkRole(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $role = $data["role"];
        if (in_array('ROLE_USER', $this->getUser()->getRoles(), true));
            else (in_array('ROLE_ADMIN', $this->getUser()->getRoles(), true));
        return $this->json(in_array($role, $user->getRoles()));
    }

    #[Route('/register', name: "app_register", methods: 'POST')]
    public function registerUser(Request $request): Response  {
        $data = json_decode($request->getContent(), true);
        $newUser = new FutureUser();
        $newUser->setEmail($data["email"]);
        $newUser->setIsValid(false);
        $this->em->persist($newUser);
        $this->em->flush();
        return $this->json(["code" => 200, "message" => "New user added!", ]);
    }
}
