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


    #[Route('/hello', name: 'hello', methods: "POST")]
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

    #[Route('/.user/login', name: 'login', methods: "POST")]
    public function checklogin(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $login = $data["login"];
        if (!$user) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($login, $user->getLogin()));

    }

    #[Route('/.user/user', name: 'user', methods: "POST")]
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


    #[Route('/.user/admin', name: 'admin', methods: "POST")]
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


    #[Route('/check_role', name: 'app_user_api_check_role', methods: "POST")]
    public function checkRole(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $role = $data["role"];
        if (!$role) {
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($role, $user->getRoles()));
    }
}
