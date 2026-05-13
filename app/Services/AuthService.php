namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function login($email, $password): bool
    {
        return Auth::attempt([
            'email' => $email,
            'password' => $password
        ]);
    }

    public function logout(): void
    {
        Auth::logout();
    }
}