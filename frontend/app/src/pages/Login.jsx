import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import authImage from '../assets/new2.webp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    // Form status states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Mock API login request
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Clear fields on success
            setEmail('');
            setPassword('');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-fashion-eggshell flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl bg-fashion-eggshell border border-fashion-moss/10 shadow-2xl flex rounded-2xl overflow-hidden min-h-[600px]">
                
                {/* Visual Banner Panel - Desktop Only (Left) */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-fashion-moss text-fashion-eggshell">
                    <div className="absolute inset-0 z-10 bg-fashion-moss/20 backdrop-brightness-[0.85]" />
                    <img 
                        src={authImage} 
                        alt="Veloura Editorial Model" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                    />
                    
                    {/* Brand overlay branding */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-12">
                        <Link to="/" className="text-3xl font-playfair font-black tracking-tighter hover:opacity-95 transition-opacity">
                            Veloura
                        </Link>
                        
                        <div className="space-y-4">
                            <span className="text-[10px] font-poppins font-bold tracking-[0.3em] uppercase opacity-75">
                                Autumn / Winter '26
                            </span>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight">
                                Curating timeless<br />individual style.
                            </h2>
                            <p className="font-inter text-xs tracking-wide font-light max-w-md opacity-85 leading-relaxed">
                                Join our community of designers, trendsetters, and curators to access members-only releases, custom tailoring services, and invitations to local trunk shows.
                            </p>
                        </div>

                        <div className="text-[10px] font-poppins tracking-widest opacity-50">
                            © 2026 VELOURA. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>

                {/* Form Panel - Mobile First (Right) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 md:px-16 bg-fashion-eggshell relative">
                    
                    {/* Header for Mobile view */}
                    <div className="lg:hidden text-center mb-8">
                        <Link to="/" className="text-3xl font-playfair font-black tracking-tighter text-fashion-moss inline-block mb-2">
                            Veloura
                        </Link>
                        <p className="text-[10px] font-poppins font-bold tracking-widest uppercase text-fashion-moss/60">
                            Timeless Fashion
                        </p>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-fashion-black mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-sm font-inter text-fashion-moss/80 font-light">
                            Enter your credentials to access your personal collection.
                        </p>
                    </div>

                    {submitSuccess ? (
                        <div className="bg-fashion-moss/10 border border-fashion-moss/20 p-6 rounded-xl text-center space-y-4 animate-fadeIn">
                            <div className="w-12 h-12 bg-fashion-moss text-fashion-eggshell rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                                ✓
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-fashion-black">
                                Login Successful
                            </h3>
                            <p className="text-xs font-inter text-fashion-moss/80">
                                Welcome back to Veloura! Redirection is currently mocked for this frontend-only demonstration.
                            </p>
                            <button 
                                onClick={() => setSubmitSuccess(false)}
                                className="inline-block text-[11px] font-poppins font-bold uppercase tracking-wider text-fashion-moss hover:text-fashion-black transition-colors"
                            >
                                Try Login Page Again
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Address */}
                            <div className="relative">
                                <label className="block text-[10px] font-poppins font-bold uppercase tracking-widest text-fashion-moss mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: null });
                                    }}
                                    placeholder="testname@example.com"
                                    className={`w-full px-4 py-3 bg-fashion-eggshell border ${errors.email ? 'border-fashion-terracotta' : 'border-fashion-moss/30'} text-fashion-black font-inter text-sm focus:outline-none focus:border-fashion-moss transition-colors rounded`}
                                />
                                {errors.email && (
                                    <span className="text-[11px] font-inter text-fashion-terracotta mt-1 block">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-[10px] font-poppins font-bold uppercase tracking-widest text-fashion-moss">
                                        Password
                                    </label>
                                    <a href="#" className="text-[10px] font-poppins font-bold uppercase tracking-wider text-fashion-moss/60 hover:text-fashion-black transition-colors">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) setErrors({ ...errors, password: null });
                                        }}
                                        placeholder="••••••••"
                                        className={`w-full pl-4 pr-10 py-3 bg-fashion-eggshell border ${errors.password ? 'border-fashion-terracotta' : 'border-fashion-moss/30'} text-fashion-black font-inter text-sm focus:outline-none focus:border-fashion-moss transition-colors rounded`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-fashion-moss/60 hover:text-fashion-moss transition-colors"
                                    >
                                        {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-[11px] font-inter text-fashion-terracotta mt-1 block">
                                        {errors.password}
                                    </span>
                                )}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 rounded border-fashion-moss/30 text-fashion-moss focus:ring-fashion-moss/20 focus:ring-offset-fashion-eggshell bg-fashion-eggshell cursor-pointer accent-fashion-moss"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-xs font-inter text-fashion-moss/80 cursor-pointer select-none">
                                    Remember me on this device
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full inline-flex items-center justify-center text-[11px] font-poppins font-bold uppercase tracking-[0.2em] py-4 bg-fashion-moss text-fashion-eggshell overflow-hidden transition-all duration-300 hover:bg-fashion-moss/90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-fashion-eggshell border-t-transparent rounded-full animate-spin" />
                                        <span>Authenticating...</span>
                                    </div>
                                ) : (
                                    <span>Sign In</span>
                                )}
                            </button>
                        </form>
                    )}

                    {/* Navigation to Signup */}
                    <div className="mt-8 text-center">
                        <p className="text-xs font-inter text-fashion-moss/80">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-poppins font-bold uppercase tracking-wider text-fashion-moss hover:text-fashion-black transition-colors ml-1 text-[11px]">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
