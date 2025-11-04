"use client"

import React from "react"

export function MockupSection() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Aperçu des fonctionnalités"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          {/* Left: iPhone Mockup with Notifications */}
          <div className="flex justify-center w-full lg:w-auto lg:flex-[0_0_auto]">
            <div className="w-full max-w-[280px] lg:max-w-[320px]">
              <div className="glass-nebula-mockup rounded-[2.5rem] p-4">
                {/* iPhone Frame */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2.5rem] p-1">
                      {/* iPhone screen */}
                      <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] relative">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20"></div>
                        
                        {/* Status bar */}
                        <div className="relative pt-9 pb-3 px-6">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-gray-900">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="text-gray-900">
                                <path d="M0 11h2V8H0v3zM4 11h2V5H4v6zM8 11h2V2H8v9zM12 11h2V5h-2v6z" fill="currentColor"/>
                              </svg>
                              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="text-gray-900">
                                <path d="M8 0L3 6h10L8 0zM2 7l6 5 6-5H2z" fill="currentColor"/>
                              </svg>
                              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-gray-900">
                                <rect x="1" y="3" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                <rect x="20" y="5" width="1.5" height="2" fill="currentColor"/>
                                <rect x="2.5" y="4.5" width="13" height="3" rx="0.5" fill="currentColor"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Notifications List */}
                        <div className="px-4 py-2 space-y-3">
                          {/* Notification 1 */}
                          <div className="glass-notification rounded-2xl p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-gold flex items-center justify-center text-white font-semibold text-sm shadow-md flex-shrink-0">
                                A
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[13px] font-semibold text-gray-900">Alfred</span>
                                  <span className="text-[10px] text-gray-500">il y a 5min</span>
                                </div>
                                <p className="text-[12px] text-gray-700 leading-[1.4]">
                                  Rendez-vous confirmé avec Marie Dubois demain à 14h
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Notification 2 */}
                          <div className="glass-notification rounded-2xl p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-gold flex items-center justify-center text-white font-semibold text-sm shadow-md flex-shrink-0">
                                A
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[13px] font-semibold text-gray-900">Alfred</span>
                                  <span className="text-[10px] text-gray-500">il y a 1h</span>
                                </div>
                                <p className="text-[12px] text-gray-700 leading-[1.4]">
                                  Nouveau message reçu de Jean Martin
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Notification 3 */}
                          <div className="glass-notification rounded-2xl p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-gold flex items-center justify-center text-white font-semibold text-sm shadow-md flex-shrink-0">
                                A
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[13px] font-semibold text-gray-900">Alfred</span>
                                  <span className="text-[10px] text-gray-500">il y a 2h</span>
                                </div>
                                <p className="text-[12px] text-gray-700 leading-[1.4]">
                                  Rapport hebdomadaire : 24 appels traités
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Desktop Dashboard Mockup - Stripe Style */}
          <div className="flex justify-center w-full lg:w-auto lg:flex-[1.6_1_0] max-w-[800px]">
            <div className="glass-nebula-mockup rounded-[2rem] p-6 lg:p-8 w-full">
              {/* Browser Window - Desktop Aspect Ratio (16:10) */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl aspect-[16/10]">
                {/* Browser Bar */}
                <div className="bg-gray-50/90 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-gray-200/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-1.5 text-xs text-gray-600 text-center font-medium border border-gray-200/50">
                    alfred.ai/dashboard
                  </div>
                </div>
                
                {/* Dashboard Content - Stripe Style */}
                <div className="p-6 lg:p-8 bg-white h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">Aujourd'hui</h3>
                    <p className="text-xs lg:text-sm text-gray-500">Résumé de votre activité</p>
                  </div>
                  
                  {/* KPIs Grid */}
                  <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8 flex-1">
                    <div className="p-4 lg:p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-blue/10 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue lg:w-4 lg:h-4">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        </div>
                        <span className="text-[10px] lg:text-xs font-medium text-green-600 bg-green-50 px-1.5 lg:px-2 py-0.5 rounded-full">+12%</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">24</div>
                      <div className="text-[10px] lg:text-xs text-gray-500">Appels reçus</div>
                    </div>
                    
                    <div className="p-4 lg:p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold lg:w-4 lg:h-4">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                        </div>
                        <span className="text-[10px] lg:text-xs font-medium text-green-600 bg-green-50 px-1.5 lg:px-2 py-0.5 rounded-full">+23%</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">8</div>
                      <div className="text-[10px] lg:text-xs text-gray-500">RDV pris</div>
                    </div>
                    
                    <div className="p-4 lg:p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-blue/10 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue lg:w-4 lg:h-4">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                        </div>
                        <span className="text-[10px] lg:text-xs font-medium text-green-600 bg-green-50 px-1.5 lg:px-2 py-0.5 rounded-full">+8%</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">12</div>
                      <div className="text-[10px] lg:text-xs text-gray-500">Messages relayés</div>
                    </div>
                  </div>
                  
                  {/* Performance Chart */}
                  <div className="rounded-xl border border-gray-200/50 bg-white p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                      <div>
                        <h4 className="text-xs lg:text-sm font-semibold text-gray-900">Performance</h4>
                        <p className="text-[10px] lg:text-xs text-gray-500 mt-0.5">Dernières 24 heures</p>
                      </div>
                      <div className="text-xl lg:text-2xl font-semibold text-gray-900">92%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue to-gold rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
